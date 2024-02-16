import { db } from '@/app/_lib/prisma'

import { TutionItemRow } from './tution-item-row'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/_components/ui/table'

export async function TutionTable() {
  const tutions = await db.tuition.findMany({
    include: { user: true },
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead className="w-[400px]">Observação</TableHead>
            <TableHead className="w-[164px]">Tipo de Pagamento</TableHead>
            <TableHead className="w-[100px]">Valor</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="text-sm font-normal text-muted-foreground">
          {tutions.map((tution) => (
            <TutionItemRow key={tution.id} tution={tution} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
