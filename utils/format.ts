export function formatTextToHTML(text: string): string {
  // Remove leading and trailing whitespaces
  const trimmedText: string = text.trim().replace(/-/g, "\n\n");
  console.log("trimmedText", trimmedText);

  // Split the text into steps
  const steps: string[] = trimmedText.split("\n\n");

  // Format the steps as an ordered list in HTML
  let html: string = "<ol>";
  steps.forEach((step: string, index: number) => {
    if (index === 0) html += `<li class="first-step">${step}`;
    else html += `<li>${step}</li>`;
  });
  html += "</ol>";

  return html;
}
