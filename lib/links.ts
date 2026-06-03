export function isPresentUrl(value: string | undefined): value is string {
  return Boolean(value && value.trim().length > 0);
}

export function emailHref(email: string | undefined): string | undefined {
  if (!isPresentUrl(email)) {
    return undefined;
  }

  return email.startsWith("mailto:") ? email : `mailto:${email}`;
}
