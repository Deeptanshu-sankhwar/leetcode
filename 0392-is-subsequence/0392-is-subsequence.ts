function isSubsequence(s: string, t: string): boolean {
    let sPtr: number = 0;
    let tPtr: number = 0;

    for (tPtr = 0; tPtr < t.length; tPtr++)  {
        if (t[tPtr] == s[sPtr])    {
            sPtr++;
        }
    }    
    if (sPtr == s.length)   {
        return true;
    }
    return false;
};