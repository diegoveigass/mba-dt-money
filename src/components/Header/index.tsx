import { useState, memo } from 'react'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

function HeaderComponent() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  function closeTransactionModal() {
    setIsTransactionModalOpen(false)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root
          open={isTransactionModalOpen}
          onOpenChange={setIsTransactionModalOpen}
        >
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal
            closeTransactionModal={closeTransactionModal}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export const Header = memo(HeaderComponent)
