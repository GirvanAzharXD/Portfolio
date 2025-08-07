function Test() {
  return React.createElement('div', {
    style: { 
      background: 'lime', 
      color: 'black', 
      padding: '100px',
      fontSize: '30px',
      minHeight: '100vh',
      textAlign: 'center'
    }
  }, [
    React.createElement('h1', {key: 'h1'}, '🟢 LIME GREEN TEST'),
    React.createElement('p', {key: 'p1'}, 'React without JSX - SUCCESS!'),
    React.createElement('p', {key: 'p2'}, 'If you see lime green, React is working!')
  ]);
}

export default Test;
