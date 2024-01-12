var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-bertrand-pnt",
  "level": "1",
  "url": "sec-bertrand-pnt.html",
  "type": "Section",
  "number": "1.1",
  "title": "Prime Number Theorem",
  "body": " Prime Number Theorem  Write for the number of primes less than or equal to . The Prime Number Theorem (PNT) asserts that , that is, . Here is the natural logarithm.  The Prime Number Theorem was proved in 1896-97 by Hadamard and by de la Vallée Poussin independently.  A consequence of the PNT is that for any there exists such that for all , there exists a prime such that .  Why does PNT imply this? The number of primes in the interval is equal to which is asymptotic to , which goes to infinity as .  For , .  If , , , are positive-valued functions and , , then . State and prove suitable conditions for .  Bertrand's postulate is relatively weak ( ) but on the other hand it is claimed for all , not just some .  "
},
{
  "id": "sec-bertrand-pnt-6",
  "level": "2",
  "url": "sec-bertrand-pnt.html#sec-bertrand-pnt-6",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "",
  "body": "For , . "
},
{
  "id": "sec-bertrand-pnt-7",
  "level": "2",
  "url": "sec-bertrand-pnt.html#sec-bertrand-pnt-7",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": "If , , , are positive-valued functions and , , then . State and prove suitable conditions for . "
},
{
  "id": "sec-bertrand-erdos-proof",
  "level": "1",
  "url": "sec-bertrand-erdos-proof.html",
  "type": "Section",
  "number": "1.2",
  "title": "Erdős’s proof of Bertrand’s postulate",
  "body": " Erdős's proof of Bertrand's postulate    . ( is large .)   Observe , first using the Binomial Theorem and then grouping the first and last terms . This sum has terms (including the term and the terms in the summation). The largest term is the central binomial coefficient . Since the largest term is at least as great as the average value of the terms, we have .    For a prime and integer let be the largest exponent of a power of that divides , i.e., . Observe that and (assuming, of course, that is an integer).    .   There are multiples of less than or equal to , and they each contribute a factor of to . There are multiples of , and they each contribute an additional factor of to . And so on.    Let . Then .   First, let be an integer such that . Now where we can drop terms with , since then , so , meaning .  For all real , .  Using this, . So .     For a real number , the primorial  is the product of the primes less than or equal to , , where the product is over primes . For example, , , and .    For all , .   By induction on . First, for , while . For , while .  For the inductive step, if is even, then is not prime, so . If is odd, say , then . By induction this is less than or equal to .  Observe that if then is a factor in but not in or . So is divisible by . In fact is divisible by each prime in this range, hence it is divisible by the product of these primes (why?). Therefore the binomial coefficient is greater than or equal this product of primes, .  Finally, . In this sum the two largest terms are . Hence .  Putting it all together, .    In a sense there are not too many primes less than or equal to (their product is small ) and each one contributes a small amount to (a factor of at most ), yet is large . This tension will lead to a contradiction, but first we must raise the tension even higher.   If and then , that is, .   Since , then , but . Since and , then . So is divisible by but not . (We need in order to say that only contributes one factor of , not two.)  However , so . Then . So the factors in the numerator and denominator of cancel out.    Now, we can put these claims together.   Erdős's proof of Bertrand's postulate  Let and suppose there is no prime with . Then . We can omit primes , as well as primes (why?).  We know every . There are at most primes such that . Hence . On the other hand, if , then . Since we have , it must be . Thus .  Exercise: We proved for integers . What if is not an integer? Justify this step.  Putting it together, . And since we get . That is, . Taking the logarithm of each side gives . We know grows more slowly than , so the whole right side grows more slowly than . Therefore the left side grows more quickly than the right side. And yet the left side is supposed to be less than or equal to the right side! This shows that our assumption, that there is no prime such that , leads to a contradiction.  In more detail: the function is concave down. (Exercise: Check that .) So for any linear function the inequality is valid on an interval (why?).  In this case, is valid for but not for . (We can check this on a calculator. To find these numbers, we try different values of and narrow down on the largest value of where the inequality is valid, or the smallest value where it is not valid.)  This shows: If there is no prime with , then . Equivalently: If , then there is a prime such that .  Finally, to take care of consider the sequence of primes . These satisfy . For any , choose . Then we get , so is a prime in the interval .   "
},
{
  "id": "sec-bertrand-erdos-proof-2",
  "level": "2",
  "url": "sec-bertrand-erdos-proof.html#sec-bertrand-erdos-proof-2",
  "type": "Claim",
  "number": "1.2.1",
  "title": "",
  "body": "  . ( is large .)   Observe , first using the Binomial Theorem and then grouping the first and last terms . This sum has terms (including the term and the terms in the summation). The largest term is the central binomial coefficient . Since the largest term is at least as great as the average value of the terms, we have .   "
},
{
  "id": "sec-bertrand-erdos-proof-4",
  "level": "2",
  "url": "sec-bertrand-erdos-proof.html#sec-bertrand-erdos-proof-4",
  "type": "Claim",
  "number": "1.2.2",
  "title": "",
  "body": "  .   There are multiples of less than or equal to , and they each contribute a factor of to . There are multiples of , and they each contribute an additional factor of to . And so on.  "
},
{
  "id": "sec-bertrand-erdos-proof-5",
  "level": "2",
  "url": "sec-bertrand-erdos-proof.html#sec-bertrand-erdos-proof-5",
  "type": "Claim",
  "number": "1.2.3",
  "title": "",
  "body": " Let . Then .   First, let be an integer such that . Now where we can drop terms with , since then , so , meaning .  For all real , .  Using this, . So .   "
},
{
  "id": "sec-bertrand-erdos-proof-6",
  "level": "2",
  "url": "sec-bertrand-erdos-proof.html#sec-bertrand-erdos-proof-6",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": " For a real number , the primorial  is the product of the primes less than or equal to , , where the product is over primes . For example, , , and .  "
},
{
  "id": "sec-bertrand-erdos-proof-7",
  "level": "2",
  "url": "sec-bertrand-erdos-proof.html#sec-bertrand-erdos-proof-7",
  "type": "Claim",
  "number": "1.2.5",
  "title": "",
  "body": " For all , .   By induction on . First, for , while . For , while .  For the inductive step, if is even, then is not prime, so . If is odd, say , then . By induction this is less than or equal to .  Observe that if then is a factor in but not in or . So is divisible by . In fact is divisible by each prime in this range, hence it is divisible by the product of these primes (why?). Therefore the binomial coefficient is greater than or equal this product of primes, .  Finally, . In this sum the two largest terms are . Hence .  Putting it all together, .   "
},
{
  "id": "sec-bertrand-erdos-proof-9",
  "level": "2",
  "url": "sec-bertrand-erdos-proof.html#sec-bertrand-erdos-proof-9",
  "type": "Claim",
  "number": "1.2.6",
  "title": "",
  "body": " If and then , that is, .   Since , then , but . Since and , then . So is divisible by but not . (We need in order to say that only contributes one factor of , not two.)  However , so . Then . So the factors in the numerator and denominator of cancel out.   "
},
{
  "id": "sec-bertrand-erdos-proof-11",
  "level": "2",
  "url": "sec-bertrand-erdos-proof.html#sec-bertrand-erdos-proof-11",
  "type": "Proof",
  "number": "1.2.1",
  "title": "Erdős’s proof of Bertrand’s postulate.",
  "body": " Erdős's proof of Bertrand's postulate  Let and suppose there is no prime with . Then . We can omit primes , as well as primes (why?).  We know every . There are at most primes such that . Hence . On the other hand, if , then . Since we have , it must be . Thus .  Exercise: We proved for integers . What if is not an integer? Justify this step.  Putting it together, . And since we get . That is, . Taking the logarithm of each side gives . We know grows more slowly than , so the whole right side grows more slowly than . Therefore the left side grows more quickly than the right side. And yet the left side is supposed to be less than or equal to the right side! This shows that our assumption, that there is no prime such that , leads to a contradiction.  In more detail: the function is concave down. (Exercise: Check that .) So for any linear function the inequality is valid on an interval (why?).  In this case, is valid for but not for . (We can check this on a calculator. To find these numbers, we try different values of and narrow down on the largest value of where the inequality is valid, or the smallest value where it is not valid.)  This shows: If there is no prime with , then . Equivalently: If , then there is a prime such that .  Finally, to take care of consider the sequence of primes . These satisfy . For any , choose . Then we get , so is a prime in the interval .  "
},
{
  "id": "sec-bertrand-corollaries",
  "level": "1",
  "url": "sec-bertrand-corollaries.html",
  "type": "Section",
  "number": "1.3",
  "title": "Corollaries",
  "body": " Corollaries   Primes between consecutive squares  Is it true that for all , there is a prime such that ?  What does the PNT say about this problem?  We get: Before we continue, let us justify the approximation in the last step. Let . By the Mean Value Theorem, for some . We have . Since we get the approximation.  Since , there should be primes between and . So, why doesn't this answer the question?  The problem is the error term in the PNT. Suppose the error in the approximation is of the order . In this case, around and we would end up with errors of order ; our approximation would be something like , which is not informative. We need better control of errors in the PNT!    Pairs that add up to primes   (Greenfield Greenfield, 1998) For the set can be partitioned into pairs such that each is prime.   By induction on . For , our set is . There is one pair, with , prime. For , let be a prime such that . In fact it must be . Write , where . Here is odd. We can form pairs: . Each of these pairs adds up to . They take care of all the numbers . What's left is . Since is odd, is even, and so this remaining set can be paired off inductively.      Explicit bounds for the PNT  Another corollary of our work so far gives explicit bounds for the PNT.   There are constants such that for all , .   First, the upper bound. We have . There are primes in the interval , and they are greater than , so . Taking logarithms, so for all . This gives an upper bound with .  Exercise: Find the maximum value of for , and show that it is strictly less than . Use to get .  The lower bound is more difficult. Let , and let be the least (smallest) even integer not less than , so . First of all, . Second, : there is at most one extra prime counted by but not by , namely if it is prime and . So .  Let be all the primes dividing . They are all less than or equal to , so . We can write . Therefore , or . This shows .  Now use the inequality to get where the last inequality holds when . Exponentiating both sides, this is equivalent to . By trying some values of (or plotting a graph) we find that this last inequality is valid for . (Exercise: Find . Is this number prime?) Exercise: Show that for , so . This implies the last inequality is valid for all .  So for we have , where the last inequality holds when .  Exercise: Factor and show that for all .  This shows for all . Here .  To find a lower bound value that works for all we might need to use a slightly smaller .     "
},
{
  "id": "sec-bertrand-corollaries-2-2",
  "level": "2",
  "url": "sec-bertrand-corollaries.html#sec-bertrand-corollaries-2-2",
  "type": "Question",
  "number": "1.3.1",
  "title": "",
  "body": "Is it true that for all , there is a prime such that ? "
},
{
  "id": "sec-bertrand-corollaries-2-3",
  "level": "2",
  "url": "sec-bertrand-corollaries.html#sec-bertrand-corollaries-2-3",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": "What does the PNT say about this problem? "
},
{
  "id": "sec-bertrand-corollaries-3-2",
  "level": "2",
  "url": "sec-bertrand-corollaries.html#sec-bertrand-corollaries-3-2",
  "type": "Theorem",
  "number": "1.3.3",
  "title": "",
  "body": " (Greenfield Greenfield, 1998) For the set can be partitioned into pairs such that each is prime.   By induction on . For , our set is . There is one pair, with , prime. For , let be a prime such that . In fact it must be . Write , where . Here is odd. We can form pairs: . Each of these pairs adds up to . They take care of all the numbers . What's left is . Since is odd, is even, and so this remaining set can be paired off inductively.   "
},
{
  "id": "sec-bertrand-corollaries-4-3",
  "level": "2",
  "url": "sec-bertrand-corollaries.html#sec-bertrand-corollaries-4-3",
  "type": "Corollary",
  "number": "1.3.4",
  "title": "",
  "body": " There are constants such that for all , .   First, the upper bound. We have . There are primes in the interval , and they are greater than , so . Taking logarithms, so for all . This gives an upper bound with .  Exercise: Find the maximum value of for , and show that it is strictly less than . Use to get .  The lower bound is more difficult. Let , and let be the least (smallest) even integer not less than , so . First of all, . Second, : there is at most one extra prime counted by but not by , namely if it is prime and . So .  Let be all the primes dividing . They are all less than or equal to , so . We can write . Therefore , or . This shows .  Now use the inequality to get where the last inequality holds when . Exponentiating both sides, this is equivalent to . By trying some values of (or plotting a graph) we find that this last inequality is valid for . (Exercise: Find . Is this number prime?) Exercise: Show that for , so . This implies the last inequality is valid for all .  So for we have , where the last inequality holds when .  Exercise: Factor and show that for all .  This shows for all . Here .  To find a lower bound value that works for all we might need to use a slightly smaller .   "
},
{
  "id": "bibliography",
  "level": "1",
  "url": "bibliography.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": "  Galvin, David  Erdős's proof of Bertrand's postulate  2015    "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
