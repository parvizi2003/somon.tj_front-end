export function handleChange(e, setState) {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
}

export function handleBlur(e, setState) {
    setState((prev) => ({
      ...prev,
      [e.target.name]: Boolean(!e.target.value),
    }));
}