import Card, { CardVariant } from '../components/Card'

export const CardPage = () => {
  return (
    <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Button</button>
        <div>under button text</div>
      </Card>
  )
}
