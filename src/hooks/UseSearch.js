import searchData from '../guerrilla-catalog-build.json'

const useSearch = () => {
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    const model = item.data?.[0]?.name || "Model N/A";
    const make = item.data?.[0]?.data?.[0]?.name || "Make N/A";
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name} {model}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>{make}</span>
      </>
    )
  }

  return {
    handleOnSearch,
    handleOnFocus,
    handleOnHover,
    handleOnSelect,
    formatResult,
    items: searchData
  }
}

export default useSearch;