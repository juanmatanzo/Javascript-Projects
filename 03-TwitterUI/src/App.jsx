import './App.css'
import { TwitterFollowCard } from './components/TwitterFollowCard/TwitterFollowCard'
import usersArray from './services/helpers'

export function App () {
    return (
        <section className='App'>
            {
                usersArray?.map( e => {
                    return (
                        <TwitterFollowCard key={e.id} userName={e.user}>
                            {e.name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}