import { useState } from 'react'
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import Checkbox from './components/ui/Checkbox'
import Separator from './components/ui/Separator'

const PAGE_LISTS = ['Page 1', 'Page 2', 'Page 3', 'Page 4']

function App() {
  const [allPages, setAllPages] = useState(false)
  const [pages, setPages] = useState<boolean[]>(PAGE_LISTS.map(() => false))

  const toggleAll = (value: boolean) => {
    setAllPages(value)
    setPages(pages.map(() => value))
  }

  const toggleSingle = (index: number, value: boolean) => {
    const updated = [...pages]
    updated[index] = value
    setPages(updated)

    setAllPages(updated.every(Boolean))
  }

  const onSubmit = () => {
    const selectedNames = PAGE_LISTS.filter((_, i) => pages[i]);
    alert(`Selected: ${selectedNames.join(', ') || 'None'}`);
  }


  return (
    <main className='flex items-center justify-center h-screen'>
      <Card className='min-w-[370px]'>
        <Checkbox checked={allPages} label='All pages' onChange={toggleAll} />
        <Separator />
        {PAGE_LISTS.map((page, i) =>
          <Checkbox
            key={page}
            checked={pages[i]}
            label={page}
            onChange={(v) => toggleSingle(i, v)}
          />
        )}
        <Separator />
        <Button className='my-2.5' onClick={onSubmit}>Done</Button>
      </Card>
    </main>
  )
}

export default App
