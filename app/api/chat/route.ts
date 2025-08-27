import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Iniciando processamento do chat")

    // Verificar se a chave da API existe
    if (!process.env.OPENAI_API_KEY) {
      console.error("[v0] OPENAI_API_KEY não encontrada")
      return NextResponse.json({ error: "Configuração da API não encontrada" }, { status: 500 })
    }

    const { message, context } = await request.json()
    console.log("[v0] Mensagem recebida:", message)

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: context,
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      console.error("[v0] Erro na resposta da OpenAI:", response.status, response.statusText)
      return NextResponse.json({ error: "Erro ao comunicar com a OpenAI" }, { status: 500 })
    }

    const completion = await response.json()
    console.log("[v0] Resposta da OpenAI recebida")

    return NextResponse.json({
      response: completion.choices[0]?.message?.content || "Desculpe, não consegui processar sua mensagem.",
    })
  } catch (error) {
    console.error("[v0] Erro na API do chat:", error)

    // Garantir que sempre retornamos JSON válido
    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        details: error instanceof Error ? error.message : "Erro desconhecido",
      },
      { status: 500 },
    )
  }
}
