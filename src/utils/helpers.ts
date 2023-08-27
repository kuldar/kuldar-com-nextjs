// Greeting function based on time of day
export function generateGreeting(): string {
  const date = new Date()
  const hour = date.getHours()

  if (hour >= 5 && hour < 8) {
    return 'Good early morning!'
  } else if (hour >= 5 && hour < 12) {
    return 'Good morning!'
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon!'
  } else if (hour >= 18 && hour < 22) {
    return 'Good evening!'
  } else if (hour >= 22) {
    return 'Good late evening!'
  } else {
    return 'Hey night-owl!'
  }
}

// Format date to a readable string
export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(date))
}
