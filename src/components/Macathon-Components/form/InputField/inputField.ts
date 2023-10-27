export function addClassHasValue(): void {
  const emailInput: HTMLInputElement | null = document.getElementById(
    "email"
  ) as HTMLInputElement | null;

  emailInput?.addEventListener("input", function () {
    if (emailInput?.value.trim() !== "") {
      emailInput?.classList.add("has-value");
    } else {
      emailInput.classList.remove("has-value");
    }
  });
}
