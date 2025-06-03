import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Dikkat:</span> Sadece test amaçlıdır.
    </Badge>
  )
}

export default PaymentTest
