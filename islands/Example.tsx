export default function Example() {
  function print() {
    alert("Oi");
  }

  return <p class="cursor-pointer" onClick={print}>Clique aqui!</p>;
}
