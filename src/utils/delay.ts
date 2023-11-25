export type DelayProps = {
  /** @default 1000 */
  milliseconds?: number;

  /** @default false */
  throwError?: boolean;
};

export async function delay(options?: DelayProps) {
  const { milliseconds = 1000, throwError = false } = options || {};

  if (throwError) {
    await new Promise((_, reject) => {
      setTimeout(() => reject(new Error()), milliseconds);
    });
  } else {
    await new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }
}
