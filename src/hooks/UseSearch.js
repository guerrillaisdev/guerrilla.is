import searchData from '../guerrilla-catalog-build.json'

const useSearch = () => {  
  const onSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const onHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const onSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const onFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    const model = item.data?.[0]?.name || "Model N/A";
    const make = item.data?.[0]?.data?.[0]?.name || "Make N/A";
    const amountOfPetrols = item?.data?.[0]?.data?.[0]?.Petrols
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name} {model}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>{make}</span>
      </>
    )
  }

  return {
    onSearch,
    onFocus,
    onHover,
    onSelect,
    formatResult,
    items: searchData
  }
}

export default useSearch;