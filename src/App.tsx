import './styles/main.css'
import * as Dialog from '@radix-ui/react-dialog'

import logoimg from './assets/logo-nlw-esports.svg'
import { GameBanner } from './components/GameBanner'
import { useEffect, useState } from 'react';
import { api } from './utils/axios';
import { CreateAdBanner } from './components/CreateAdBanner';
import { Input } from './components/Form/Input';
import { GameController } from 'phosphor-react';
import { CreateAdModal } from './components/CreateAdModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    async function allGames() {
      const result = await api.get('/games')
      setGames(result.data)
    }

    allGames()
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 overflow-hidden">
      <img src={logoimg} alt="" />

      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-nlw-gradient bg-clip-text'>duo</span> está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl}
              adsCount={game._count.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
