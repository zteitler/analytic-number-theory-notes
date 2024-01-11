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
  "body": " Erdős's proof of Bertrand's postulate    . ( is large .)   Observe , first using the Binomial Theorem and then grouping the first and last terms . This sum has terms (including the term and the terms in the summation). The largest term is the central binomial coefficient . Since the largest term is at least as great as the average value of the terms, we have .    For a prime and integer let be the largest exponent of a power of that divides , i.e., . Observe that and (assuming, of course, that is an integer).    .   There are multiples of less than or equal to , and they each contribute a factor of to . There are multiples of , and they each contribute an additional factor of to . And so on.    Let . Then .   First, let be an integer such that . Now where we can drop terms with , since then , so , meaning .  For all real , .  Using this, . So .     For a real number , the primorial  is the product of the primes less than or equal to , , where the product is over primes . For example, , , and .    For all , .   By induction on . First, for , while . For , while .  For the inductive step, if is even, then is not prime, so . If is odd, say , then . By induction this is less than or equal to .  Observe that if then is a factor in but not in or . So is divisible by . In fact is divisible by each prime in this range, hence it is divisible by the product of these primes (why?). Therefore the binomial coefficient is greater than or equal this product of primes, .  Finally, . In this sum the two largest terms are . Hence .  Putting it all together, .    In a sense there are not too many primes less than or equal to (their product is small ) and each one contributes a small amount to (a factor of at most ), yet is large . This tension will lead to a contradiction, but first we must raise the tension even higher.   If and then , that is, .   Since , then , but . Since and , then . So is divisible by but not . (We need in order to say that only contributes one factor of , not two.)  However , so . Then . So the factors in the numerator and denominator of cancel out.    Now, we can put these claims together.   Erdős's proof of Bertrand's postulate  Let and suppose there is no prime with . Then . We can omit primes , as well as primes (why?).  We know every . There are at most primes such that . Hence . On the other hand, if , then . Since we have , it must be . Thus .  Exercise: We proved for integers . What if is not an integer? Justify this step.  Putting it together, . And since we get .  (This is not the end of the proof, but all that I can type right now)   "
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
  "body": " Erdős's proof of Bertrand's postulate  Let and suppose there is no prime with . Then . We can omit primes , as well as primes (why?).  We know every . There are at most primes such that . Hence . On the other hand, if , then . Since we have , it must be . Thus .  Exercise: We proved for integers . What if is not an integer? Justify this step.  Putting it together, . And since we get .  (This is not the end of the proof, but all that I can type right now)  "
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
