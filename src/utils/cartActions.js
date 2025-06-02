// src/utils/cartActions.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function adicionarAoCarrinho(sessionId, productId, quantity = 1) {
  const { error } = await supabase
    .from("cart_items")
    .insert([{ session_id: sessionId, product_id: productId, quantity }]);

  if (error) {
    console.error("Erro ao adicionar ao carrinho:", error);
    return false;
  }

  return true;
}
