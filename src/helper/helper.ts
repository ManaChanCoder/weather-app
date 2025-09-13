export const getDayName = () => {
  const today: Date = new Date();

  return Array.from({ length: 7 }, (_, i: number) => {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

    return {
      name: dayName,
    };
  });
};
