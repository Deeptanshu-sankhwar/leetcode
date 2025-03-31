func isAnagram(s string, t string) bool {
    count := make(map[byte]int);

    if (len(s) != len(t))   {
        return false;
    }

    for i := 0; i < len(s); i++ {
        count[s[i]]++;
        count[t[i]]--;
    }

    for i := 0; i < len(s); i++ {
        if (count[s[i]] != 0) {
            return false;
        }
    }

    return true;
}