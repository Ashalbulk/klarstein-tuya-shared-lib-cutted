export function scrollToEnd(scrollView) {
  return () => {
    setTimeout(() => scrollView.scrollToEnd({ animated: true }), 0);
  };
}

export function scrollTo(scrollView, position) {
  return () => {
    setTimeout(() => scrollView?.scrollTo({ y: position, animated: true }), 0);
  };
}
