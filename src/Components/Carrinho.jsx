"use client"

import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"
import styles from './Carrinho.module.css'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

function generateSessionId() {
  if (typeof window === "undefined") return null
  let sessionId = localStorage.getItem("cart_session_id")
  if (!sessionId) {
    sessionId = "session_" + Math.random().toString(36).substr(2, 9) + Date.now()
    localStorage.setItem("cart_session_id", sessionId)
  }
  return sessionId
}

export default function Carrinho({ isVisible, onClose }) {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [sessionId, setSessionId] = useState(null)

  useEffect(() => {
    const id = generateSessionId()
    setSessionId(id)
    if (id && isVisible) {
      fetchCartItems(id)
    }
  }, [isVisible])

  const fetchCartItems = async (currentSessionId = sessionId) => {
    if (!currentSessionId) return

    setLoading(true)
    try {
      const { data, error } = await supabase
        .from("cart_items")
        .select(`
          *,
          product:products(*)
        `)
        .eq("session_id", currentSessionId)

      if (error) throw error
      setCartItems(data || [])
    } catch (error) {
      console.error("Erro ao buscar itens do carrinho:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateQuantity = async (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      await removeFromCart(cartItemId)
      return
    }

    try {
      const { error } = await supabase.from("cart_items").update({ quantity: newQuantity }).eq("id", cartItemId)

      if (error) throw error
      await fetchCartItems()
    } catch (error) {
      console.error("Erro ao atualizar quantidade:", error)
    }
  }

  const removeFromCart = async (cartItemId) => {
    try {
      const { error } = await supabase.from("cart_items").delete().eq("id", cartItemId)

      if (error) throw error
      await fetchCartItems()
    } catch (error) {
      console.error("Erro ao remover do carrinho:", error)
    }
  }

  const emptyCart = async () => {
    if (!sessionId) return

    const confirmEmpty = window.confirm("Tem certeza que deseja esvaziar o carrinho?")
    if (!confirmEmpty) return

    try {
      const { error } = await supabase.from("cart_items").delete().eq("session_id", sessionId)

      if (error) throw error
      setCartItems([])
    } catch (error) {
      console.error("Erro ao esvaziar o carrinho:", error)
    }
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.product?.price || 0) * item.quantity, 0)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price)
  }

 

  return (
   <>
  {/* Overlay */}
  <div className={`${styles["carrinho-overlay"]} ${isVisible ? styles["visible"] : ""}`} onClick={onClose} />

  {/* Carrinho */}
  <div className={`${styles["carrinho-container"]} ${isVisible ? styles["visible"] : ""}`}>
    <div className={styles["carrinho-header"]}>
      <h3 className={styles["carrinho-titulo"]}>Meu Carrinho</h3>
      <button className={styles["carrinho-fechar"]} onClick={onClose}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 6L18 18" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>

    {loading ? (
      <div className={styles["carrinho-carregando"]}>Carregando...</div>
    ) : cartItems.length === 0 ? (
      <div className={styles["carrinho-vazio"]}>Seu carrinho está vazio</div>
    ) : (
      <>
        <div className={styles["carrinho-itens"]}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles["carrinho-item"]}>
              <img
                src={item.product?.image_url || "/placeholder.svg?height=60&width=60"}
                alt={item.product?.name || "Produto"}
                className={styles["carrinho-item-imagem"]}
              />
              <div className={styles["carrinho-item-detalhes"]}>
                <p className={styles["carrinho-item-nome"]}>{item.product?.name || "Produto"}</p>
                <p className={styles["carrinho-item-preco"]}>{formatPrice(item.product?.price || 0)}</p>
              </div>
              <div className={styles["carrinho-item-quantidade"]}>
                <button className={styles["quantidade-btn"]} onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <span className={styles["quantidade-numero"]}>{item.quantity}</span>
                <button className={styles["quantidade-btn"]} onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles["carrinho-footer"]}>
          <div className={styles["carrinho-total"]}>
            <span className={styles["total-label"]}>Total:</span>
            <span className={styles["total-valor"]}>{formatPrice(getTotalPrice())}</span>
          </div>
          <div className={styles["carrinho-acoes"]}>
            <button className={styles["btn-finalizar"]} onClick={handleCheckout}>
              Finalizar Compra
            </button>
            <button className={styles["btn-limpar"]} onClick={emptyCart}>
              Limpar
            </button>
          </div>
        </div>
      </>
    )}
  </div>
</>

  )
}

// Função utilitária para adicionar produtos ao carrinho (use em outras páginas)
export async function adicionarAoCarrinho(productId) {
  const sessionId = generateSessionId()
  if (!sessionId) return false

  try {
    // Verificar se já existe no carrinho
    const { data: existingItems } = await supabase
      .from("cart_items")
      .select("*")
      .eq("session_id", sessionId)
      .eq("product_id", productId)

    if (existingItems && existingItems.length > 0) {
      // Atualizar quantidade
      const { error } = await supabase
        .from("cart_items")
        .update({ quantity: existingItems[0].quantity + 1 })
        .eq("id", existingItems[0].id)

      if (error) throw error
    } else {
      // Adicionar novo item
      const { error } = await supabase.from("cart_items").insert({
        session_id: sessionId,
        product_id: productId,
        quantity: 1,
      })

      if (error) throw error
    }

    return true
  } catch (error) {
    console.error("Erro ao adicionar ao carrinho:", error)
    return false
  }
}

