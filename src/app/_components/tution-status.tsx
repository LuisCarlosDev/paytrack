export type TutionStatus = 'pending' | 'paid' | 'late'

interface TutionStatusProps {
  status: TutionStatus
}

const tutionStatusMap: Record<TutionStatus, string> = {
  pending: 'Pendente',
  paid: 'Pago',
  late: 'Atrasado',
}

export function TutionStatus({ status }: TutionStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      )}

      {status === 'late' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-rose-500"
        />
      )}

      {status === 'paid' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-emerald-500"
        />
      )}

      <span className="font-medium text-muted-foreground">
        {tutionStatusMap[status]}
      </span>
    </div>
  )
}
