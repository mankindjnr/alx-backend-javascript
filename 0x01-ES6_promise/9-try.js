export default function guardrail(mathFunction) {
  const line = [];
  const display = 'Guardrail was processed';
  try {
    const output = mathFunction();
    line.push(output);
    line.push(display);
  } catch (err) {
    line.push(`Error: ${err.display}`);
    line.push(display);
  }

  return line;
}
