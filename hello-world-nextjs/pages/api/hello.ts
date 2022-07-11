// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
// ao invés de require em TS usamos essa sintaxe trazendo as necessidades que o Next precisa.
// Request é a solicitação dos dados, Response é a volta deles ao que solicitou.

type Data = {
 name: string
 age: number
}
// type = tipos pra deixar nossos objetos tipados.
 // foi criado um tipo Data que obrigatoriamente tem um objeto name que é uma string.

// export para alguem externamente tenha acesso a essa função.
export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method);
  res.status(200).json({name: "123", age: 16})
}
// exportou uma função que recebe como parâmetro de entrada a requisição e a resposta:
// tipo do req é NextApiRequest
// tipo do res é NextApiResponse<Data>

// GET pegar informação
// POST adicionar informação
// PUT atualizar informação
// DELETE para deletar informação
// https://http.cat/ => status