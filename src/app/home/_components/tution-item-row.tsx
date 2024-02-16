'use client'
import { TutionStatus } from '@/app/_components/tution-status'
import { TableRow, TableCell } from '@/app/_components/ui/table'
import { Prisma } from '@prisma/client'

interface TutionItemRowProps {
  tution: Prisma.TuitionGetPayload<{
    include: { user: true }
  }>
}

export function TutionItemRow({ tution }: TutionItemRowProps) {
  function translaterPaymentMethod(paymentMethod: string) {
    switch (paymentMethod) {
      case 'credit':
        return 'Cartão de Crédito'
      case 'debit':
        return 'Cartão de Débito'
      case 'money':
        return 'Dinheiro'
      case 'pix':
        return 'Pix'
    }
  }
  return (
    <TableRow>
      <TableCell>{tution.user.name}</TableCell>
      <TableCell>{tution.description}</TableCell>
      <TableCell>{translaterPaymentMethod(tution.paymentMethod)}</TableCell>
      <TableCell>R$ {Number(tution.price)}</TableCell>
      <TableCell>
        <TutionStatus status={tution.status as TutionStatus} />
      </TableCell>
    </TableRow>
  )
}
