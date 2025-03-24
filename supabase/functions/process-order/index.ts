
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// This endpoint will be triggered by a database webhook when a new order is created
serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { record } = await req.json();
    
    if (!record) {
      throw new Error("No order record provided");
    }

    console.log("Processing new order:", record.id);
    
    // Here we would integrate with Square POS
    // This is a placeholder for the Square API integration
    // In a real implementation, you would:
    // 1. Format the order for Square's API
    // 2. Send it to Square using their SDK or REST API
    // 3. Handle the response and update the order status
    
    console.log("Order items:", record.items);
    console.log("Customer:", record.customer_name, record.customer_email, record.customer_phone);
    console.log("Total amount:", record.total_amount);
    
    // Simulate a successful order notification
    const squareResponse = {
      success: true,
      square_order_id: `sq_${Date.now()}`,
      message: "Order successfully sent to Square POS"
    };
    
    return new Response(JSON.stringify(squareResponse), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error processing order:", error);
    
    return new Response(
      JSON.stringify({
        error: error.message || "Unknown error occurred",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
