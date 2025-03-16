function reverseWords(s: string): string {
    let arr: string[] = s.split(" ");

    arr = arr.reverse();

    arr = arr.filter((e) => !(e.length == 0));

    return arr.join(" ").trim();
};