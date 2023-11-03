export default function useFormatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고 2자리로 만듭니다.
  const day = String(date.getDate()).padStart(2, "0"); // 일도 2자리로 만듭니다.

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
