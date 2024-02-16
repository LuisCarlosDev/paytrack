import { Header } from '@/app/_components/header'
import { TutionsFilters } from './_components/tutions-filters'
import { TutionTable } from './_components/tution-table'
import { Button } from '../_components/ui/button'

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex select-none flex-col gap-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Mensalidades</h1>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="xs">
              Criar Pagamento
            </Button>
          </div>
        </div>

        <div className="space-y-2.5">
          <TutionsFilters />
        </div>

        <TutionTable />
      </div>
    </>
  )
}
