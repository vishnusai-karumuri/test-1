import { useState, useEffect } from 'react'
import { SearchIcon, SunIcon, MoonIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeTab, setActiveTab] = useState('Items')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const items = [
    { id: 1, name: 'Sword', type: 'Weapon', description: 'A sharp blade for close combat.' },
    { id: 2, name: 'Shield', type: 'Armor', description: 'Protects against incoming attacks.' },
    { id: 3, name: 'Potion', type: 'Consumable', description: 'Restores health when consumed.' },
    { id: 4, name: 'Armor', type: 'Armor', description: 'Provides protection in battle.' },
  ]

  const quests = [
    { id: 1, name: "The Lost Artifact", level: 10, reward: "500 gold" },
    { id: 2, name: "Dragon's Lair", level: 30, reward: "Epic Sword" },
    { id: 3, name: "The Haunted Forest", level: 20, reward: "Magic Amulet" },
    { id: 4, name: "Pirate's Treasure", level: 15, reward: "300 gold" },
  ]

  const bosses = [
    { id: 1, name: "Dragonlord Fyraxis", level: 50, loot: "Dragon Scale Armor" },
    { id: 2, name: "Necromancer Zul'Thrak", level: 40, loot: "Staff of the Undead" },
    { id: 3, name: "Giant Kraken", level: 35, loot: "Trident of the Seas" },
    { id: 4, name: "Shadow Queen Moira", level: 45, loot: "Crown of Shadows" },
  ]

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredQuests = quests.filter(quest =>
    quest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quest.reward.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quest.level.toString().includes(searchTerm)
  )

  const filteredBosses = bosses.filter(boss =>
    boss.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    boss.loot.toLowerCase().includes(searchTerm.toLowerCase()) ||
    boss.level.toString().includes(searchTerm)
  )

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <header className={`${darkMode ? 'bg-black' : 'bg-white'} p-4`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className=" inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <img src="/logo.png" alt="Throne of Liberty Database" className={`mx-auto w-[140px] h-[67px] ${darkMode ? 'bg-black' : 'bg-whit'}`} />
          </div>
          <nav className="hidden md:flex space-x-8 text-2xl">
            <a href="#" className={activeTab === 'Items' ? 'text-yellow-500' : 'hover:text-yellow-500 '} onClick={() => setActiveTab('Items')}>Items</a>
            <a href="#" className={activeTab === 'Quests' ? 'text-yellow-500' : 'hover:text-yellow-500 '} onClick={() => setActiveTab('Quests')}>Quests</a>
            <a href="#" className={activeTab === 'Bosses' ? 'text-yellow-500' : 'hover:text-yellow-500 '} onClick={() => setActiveTab('Bosses')}>Bosses</a>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full ml-4"
          >
            {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <div className="relative">
        <img src="/bg.jpg" alt="Fantasy background" className="w-full h-[500px] object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <img src="/logo.png" alt="Throne and Liberty Database" className="mx-auto w-[280px] h-[134px] " />
        </div>
      </div>

      <main className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

        </div>

        <h2 className="text-2xl font-bold mb-4">{activeTab}</h2>

        {activeTab === 'Items' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg`}>
                <img src="/placeholder.svg?height=200&width=400" alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Type: {item.type}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Quests' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredQuests.map((quest) => (
              <div key={quest.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg`}>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{quest.name}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Level: {quest.level}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Reward: {quest.reward}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Bosses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredBosses.map((boss) => (
              <div key={boss.id} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-lg`}>
                <img src="/placeholder.svg?height=200&width=400" alt={boss.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{boss.name}</h3>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Level: {boss.level}</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Loot: {boss.loot}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className={`${darkMode ? 'bg-black' : 'bg-gray-700'} p-4 mt-8`}>
        <div className="container mx-auto flex justify-end items-center">
          <p className="text-green-500">Made by @vkarumur</p>
        </div>
      </footer>
    </div>
  )
}