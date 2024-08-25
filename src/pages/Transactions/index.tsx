import { Header } from '../../components/Header'
import { Summary } from '../../components/summary'
import { SearchForm } from './components/SearchForm'
import { PriceHightlight, TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHightlight variant="income">
                  R$ 12.004,12
                </PriceHightlight>
              </td>
              <td>Trabalho</td>
              <td>25/08/2024</td>
            </tr>
            <tr>
              <td width="50%">Mercado</td>
              <td>
                <PriceHightlight variant="outcome">
                  - R$ 124,12
                </PriceHightlight>
              </td>
              <td>Gasto</td>
              <td>25/08/2024</td>
            </tr>

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
