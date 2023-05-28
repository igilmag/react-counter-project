import PropTypes from 'prop-types'
import Button from './components/Button'
import useCounter from './hooks/useCounter'

export function CounterApp ({ initialValue = 0 }) {
  const { counter, handleDecrease, handleReset, handleIncrease } = useCounter(initialValue)

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8 m-0 font-sans bg-slate-400">
      <h1 className='text-9xl'>Counter</h1>
      <span className='text-6xl text-green-800'>{counter}</span>
      <fieldset className='flex gap-2'>

        <Button handleClick={handleDecrease}>
            Decrease
        </Button>

        <Button handleClick={handleReset}>
            Reset
        </Button>

        <Button handleClick={handleIncrease}>
            Increase
        </Button>

      </fieldset>
    </main>
  )
}

CounterApp.propTypes = {
  initialValue: PropTypes.number
}
