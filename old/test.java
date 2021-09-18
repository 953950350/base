public class LeetCode421 {

    class Trie {
        Trie[] next;

        public Trie() {
            next = new Trie[2];
        }
    }

    public int findMaximumXOR(int[] nums) {
        if (nums.length <= 1 || nums == null)
            return 0;
        Trie root = new Trie();
        int result = 0;
        for (int num : nums) {
            int xor = 0;
            Trie insert = root, search = root;
            for (int i = 30; i >= 0; i--) {
                int bit = (num >>> i) & 1;
                int rbit = bit ^ 1;
                if (insert.next[bit] == null) {
                    insert.next[bit] = new Trie();
                }
                insert = insert.next[bit];
                if (search != null) {
                    if (search.next[rbit] != null) {
                        xor += (1 << i);
                        search = search.next[rbit];
                    } else {
                        search = search.next[bit];
                    }
                }
            }
            result = Math.max(result, xor);
        }
        return result;
    }
}