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
  "body": " Erdős's proof of Bertrand's postulate    . ( is large .)   Observe , first using the Binomial Theorem and then grouping the first and last terms . This sum has terms (including the term and the terms in the summation). The largest term is the central binomial coefficient . Since the largest term is at least as great as the average value of the terms, we have .    For a prime and integer let be the largest exponent of a power of that divides , i.e., . Observe that and (assuming, of course, that is an integer).    .   There are multiples of less than or equal to , and they each contribute a factor of to . There are multiples of , and they each contribute an additional factor of to . And so on.    Let . Then .   First, let be an integer such that . Now where we can drop terms with , since then , so , meaning .  Exercise: For all real , .  Using this, . So .     For a real number , the primorial  is the product of the primes less than or equal to , , where the product is over primes . For example, , , and .    For all , .   By induction on . First, for , while . For , while .  For the inductive step, if is even, then is not prime, so . If is odd, say , then . By induction this is less than or equal to .  Observe that if then is a factor in but not in or . So is divisible by . In fact is divisible by each prime in this range, hence it is divisible by the product of these primes (why?). Therefore the binomial coefficient is greater than or equal this product of primes, .  Finally, . In this sum the two largest terms are . Hence .  Putting it all together, .    In a sense there are not too many primes less than or equal to (their product is small ) and each one contributes a small amount to (a factor of at most ), yet is large . This tension will lead to a contradiction, but first we must raise the tension even higher.   If and then , that is, .   Since , then , but . Since and , then . So is divisible by but not . (We need in order to say that only contributes one factor of , not two.)  However , so . Then . So the factors in the numerator and denominator of cancel out.    Now, we can put these claims together.   Erdős's proof of Bertrand's postulate  Let and suppose there is no prime with . Then . We can omit primes , as well as primes (why?).  We know every . There are at most primes such that . Hence . On the other hand, if , then . Since we have , it must be . Thus .  Exercise: We proved for integers . What if is not an integer? Justify this step.  Putting it together, . And since we get . That is, . Taking the logarithm of each side gives . We know grows more slowly than , so the whole right side grows more slowly than . Therefore the left side grows more quickly than the right side. And yet the left side is supposed to be less than or equal to the right side! This shows that our assumption, that there is no prime such that , leads to a contradiction.  In more detail: the function is concave down. (Exercise: Check that .) So for any linear function the inequality is valid on an interval (why?).  In this case, is valid for but not for . (We can check this on a calculator. To find these numbers, we try different values of and narrow down on the largest value of where the inequality is valid, or the smallest value where it is not valid.)  This shows: If there is no prime with , then . Equivalently: If , then there is a prime such that .  Finally, to take care of consider the sequence of primes . These satisfy . For any , choose . Then we get , so is a prime in the interval .   "
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
  "body": " Let . Then .   First, let be an integer such that . Now where we can drop terms with , since then , so , meaning .  Exercise: For all real , .  Using this, . So .   "
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
  "id": "sec-af1-examples",
  "level": "1",
  "url": "sec-af1-examples.html",
  "type": "Section",
  "number": "2.1",
  "title": "Examples of arithmetic functions",
  "body": " Examples of arithmetic functions  An arithmetic function is a function with domain and codomain the complex numbers .  Here are a number of arithmetic functions:  Euler totient: is the number of such that and  : number of positive divisors of . . (This function is also often denoted .)  sum of positive divisors of . .  for all . (In Crisman's book this function was denoted .)  for all  . (In Crisman's book this function was denoted .)  . So , .  Möbius function:   Liouville function: (In particular as all .)  Von Mangoldt function:   : number of distinct prime divisors of  : number of prime divisors of counted with multiplicity, i.e., where .  Observe .  Think of the Von Mangoldt function as a modification of the prime indicator function. The prime indicator function is the function that equals on primes, and on non-primes. The Von Mangoldt function changes the value to instead of , and detects powers of primes along with the primes themselves.   For a prime and , .  There are multiples of less than or equal to ; all other integers in the interval are coprime to .    For all , .   Let . . So . We used that the union is disjoint. Next, every value has some gcd with , and the gcd must be a divisor of . As runs through the divisors of , so does . This shows that the union is equal to the set of .     Note that the sets are not at all disjoint; for example they all contain .         If then      The first two are left as exercises. The numbers coprime to are the non-multiples of . There are multiples of in the interval .  The Chinese Remainder Theorem gives an isomorphism of rings . Among other things, this gives an isomorphism of the groups of units (invertible elements): . (It is left as an exercise that for rings in general, .) Now , and .  Finally for we have     "
},
{
  "id": "sec-af1-examples-2",
  "level": "2",
  "url": "sec-af1-examples.html#sec-af1-examples-2",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "An arithmetic function is a function with domain and codomain the complex numbers . "
},
{
  "id": "sec-af1-examples-5",
  "level": "2",
  "url": "sec-af1-examples.html#sec-af1-examples-5",
  "type": "Theorem",
  "number": "2.1.2",
  "title": "",
  "body": " For a prime and , .  There are multiples of less than or equal to ; all other integers in the interval are coprime to .  "
},
{
  "id": "sec-af1-examples-6",
  "level": "2",
  "url": "sec-af1-examples.html#sec-af1-examples-6",
  "type": "Theorem",
  "number": "2.1.3",
  "title": "",
  "body": " For all , .   Let . . So . We used that the union is disjoint. Next, every value has some gcd with , and the gcd must be a divisor of . As runs through the divisors of , so does . This shows that the union is equal to the set of .   "
},
{
  "id": "sec-af1-examples-7",
  "level": "2",
  "url": "sec-af1-examples.html#sec-af1-examples-7",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " Note that the sets are not at all disjoint; for example they all contain .  "
},
{
  "id": "sec-af1-examples-8",
  "level": "2",
  "url": "sec-af1-examples.html#sec-af1-examples-8",
  "type": "Theorem",
  "number": "2.1.5",
  "title": "",
  "body": "      If then      The first two are left as exercises. The numbers coprime to are the non-multiples of . There are multiples of in the interval .  The Chinese Remainder Theorem gives an isomorphism of rings . Among other things, this gives an isomorphism of the groups of units (invertible elements): . (It is left as an exercise that for rings in general, .) Now , and .  Finally for we have    "
},
{
  "id": "sec-af1-multiplicative",
  "level": "1",
  "url": "sec-af1-multiplicative.html",
  "type": "Section",
  "number": "2.2",
  "title": "Multiplicative functions",
  "body": " Multiplicative functions  An arithmetic function is multiplicative when it satisfies:   is not identically zero, and  if then .  It is completely multiplicative when it is not identically zero, and satisfies: for all , .   Crisman allowed the identically zero function to be considered multiplicative. That forces a lot of statements to say if is multiplicative and not identically zero, then... .   We saw that is multiplicative. However it is not completely multiplicative: .  The Möbius function is multiplicative, but not completely multiplicative, since but . The Liouville function is completely multiplicative.  Observe that for a multiplicative (or completely multiplicative) function we must have . Indeed, , and the only solutions are or . However if (and still assuming is multiplicative or completely multiplicative) then for all , because , using that . That is, if has the multiplicative property and , then is identically zero. Since we require multiplicative functions to not be identically zero, then they must have . So it must be .  A completely multiplicative function is entirely determined by its values at primes. That is, the values for prime are enough to determine for all . Indeed, for we must have .  A multiplicative function is entirely determined by its values at powers of primes, because .  The functions , , and are completely multiplicative. The functions are multiplicative, but not completely multiplicative. (For example , but .) The proof that are multiplicative will be given in the next section, as part of a more general statement about Dirichlet products of multiplicative functions.  "
},
{
  "id": "sec-af1-multiplicative-2",
  "level": "2",
  "url": "sec-af1-multiplicative.html#sec-af1-multiplicative-2",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "An arithmetic function is multiplicative when it satisfies:   is not identically zero, and  if then .  It is completely multiplicative when it is not identically zero, and satisfies: for all , . "
},
{
  "id": "sec-af1-multiplicative-3",
  "level": "2",
  "url": "sec-af1-multiplicative.html#sec-af1-multiplicative-3",
  "type": "Remark",
  "number": "2.2.2",
  "title": "",
  "body": " Crisman allowed the identically zero function to be considered multiplicative. That forces a lot of statements to say if is multiplicative and not identically zero, then... .  "
},
{
  "id": "sec-af1-dirichlet-product",
  "level": "1",
  "url": "sec-af1-dirichlet-product.html",
  "type": "Section",
  "number": "2.3",
  "title": "Dirichlet product",
  "body": " Dirichlet product   Basic properties of Dirichlet product  Let be arithmetic functions. The Dirichlet product of and , denoted , is the arithmetic function defined by where the first sum is over positive divisors of and the second sum is over pairs of positive integers whose product is .    : Here is the Euler totient function, is the function for all , and is the function for all . We have shown that . We can rewrite this as , where the left hand side is . This shows that as claimed.   Other notable operations on arithmetic functions include:  The sum:   The pointwise product:   The composition: (assuming has values in , the domain of )  The Cauchy product, defined by . (I'm not sure if there is a common notation for the Cauchy product.)     The Dirichlet product is associative, commutative, and distributes over the sum. The function (defined by if , otherwise ) is an identity for the Dirichlet product, that is, for any arithmetic function .   For associativity:   For commutativity:   Distributivity is left as an exercise.  Let be any arithmetic function. Then , since for all other than . So .     Let be an arithmetic function. There exists a Dirichlet inverse such that if and only if . If , then is defined recursively by and for , .   If then , so . The converse direction is left as an exercise.      Dirichlet product of multiplicative functions   If are both multiplicative, then so is .   Suppose . Observe that if then there exist factorizations , , such that and . (Simply, is the product of prime factors that are in and , is the product of prime factors that are in and , and so on.) Observe that in this factorization, .  Now we have . This shows that is multiplicative.     For all , is multiplicative.   Let , so is multiplicative (in fact, completely multiplicative). Then where denotes the arithmetic function for all . Here is completely multiplicative. Since and are multiplicative, so is .     Even if both and are completely multiplicative, in general is only multiplicative, not necessarily completely multiplicative. For example let , then , the number of positive divisors of . This is multiplicative but not completely multiplicative, for example .    Let be arithmetic functions. If and are multiplicative, then so is .   First of all we have and since and are multiplicative. By definition of Dirichlet product, . Therefore . We have , that is, for .  We will prove the following statement by induction on : for all such that and . We have seen that this holds for . Suppose inductively that it holds for , and suppose are positive integers such that and . Since is multiplicative we have . Here we use that for , where since and ; we use that and that is multiplicative; at the end we use that is multiplicative.  It follows that .     If is multiplicative then its Dirichlet inverse is also multiplicative.   Both and are multiplicative.     The set of arithmetic functions with is an abelian group under Dirichlet product. The subset consisting of multiplicative functions is a subgroup.     Explanation of Dirichlet product   A power series centered at is an infinite sum . The are the coefficients of the power series. This sum defines a function of provided that it converges.  A Dirichlet series is an infinite sum . Again, the are coefficients of the Dirichlet series. The sum defines a function of provided that it converges.   Multiplication of power series corresponds to the Cauchy product of coefficients, and multiplication of Dirichlet series corresponds to the Dirichlet product of coefficients.  (add example here)   "
},
{
  "id": "sec-af1-dirichlet-product-2-2",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-2-2",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "Let be arithmetic functions. The Dirichlet product of and , denoted , is the arithmetic function defined by where the first sum is over positive divisors of and the second sum is over pairs of positive integers whose product is . "
},
{
  "id": "sec-af1-dirichlet-product-2-3",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-2-3",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  : Here is the Euler totient function, is the function for all , and is the function for all . We have shown that . We can rewrite this as , where the left hand side is . This shows that as claimed.  "
},
{
  "id": "sec-af1-dirichlet-product-2-5",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-2-5",
  "type": "Theorem",
  "number": "2.3.3",
  "title": "",
  "body": " The Dirichlet product is associative, commutative, and distributes over the sum. The function (defined by if , otherwise ) is an identity for the Dirichlet product, that is, for any arithmetic function .   For associativity:   For commutativity:   Distributivity is left as an exercise.  Let be any arithmetic function. Then , since for all other than . So .   "
},
{
  "id": "sec-af1-dirichlet-product-2-6",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-2-6",
  "type": "Theorem",
  "number": "2.3.4",
  "title": "",
  "body": " Let be an arithmetic function. There exists a Dirichlet inverse such that if and only if . If , then is defined recursively by and for , .   If then , so . The converse direction is left as an exercise.   "
},
{
  "id": "sec-af1-dirichlet-product-3-2",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-3-2",
  "type": "Theorem",
  "number": "2.3.5",
  "title": "",
  "body": " If are both multiplicative, then so is .   Suppose . Observe that if then there exist factorizations , , such that and . (Simply, is the product of prime factors that are in and , is the product of prime factors that are in and , and so on.) Observe that in this factorization, .  Now we have . This shows that is multiplicative.   "
},
{
  "id": "sec-af1-dirichlet-product-3-3",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-3-3",
  "type": "Corollary",
  "number": "2.3.6",
  "title": "",
  "body": " For all , is multiplicative.   Let , so is multiplicative (in fact, completely multiplicative). Then where denotes the arithmetic function for all . Here is completely multiplicative. Since and are multiplicative, so is .   "
},
{
  "id": "sec-af1-dirichlet-product-3-4",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-3-4",
  "type": "Remark",
  "number": "2.3.7",
  "title": "",
  "body": " Even if both and are completely multiplicative, in general is only multiplicative, not necessarily completely multiplicative. For example let , then , the number of positive divisors of . This is multiplicative but not completely multiplicative, for example .  "
},
{
  "id": "sec-af1-dirichlet-product-3-5",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-3-5",
  "type": "Theorem",
  "number": "2.3.8",
  "title": "",
  "body": " Let be arithmetic functions. If and are multiplicative, then so is .   First of all we have and since and are multiplicative. By definition of Dirichlet product, . Therefore . We have , that is, for .  We will prove the following statement by induction on : for all such that and . We have seen that this holds for . Suppose inductively that it holds for , and suppose are positive integers such that and . Since is multiplicative we have . Here we use that for , where since and ; we use that and that is multiplicative; at the end we use that is multiplicative.  It follows that .   "
},
{
  "id": "sec-af1-dirichlet-product-3-6",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-3-6",
  "type": "Corollary",
  "number": "2.3.9",
  "title": "",
  "body": " If is multiplicative then its Dirichlet inverse is also multiplicative.   Both and are multiplicative.   "
},
{
  "id": "sec-af1-dirichlet-product-3-7",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-3-7",
  "type": "Corollary",
  "number": "2.3.10",
  "title": "",
  "body": " The set of arithmetic functions with is an abelian group under Dirichlet product. The subset consisting of multiplicative functions is a subgroup.  "
},
{
  "id": "sec-af1-dirichlet-product-4-2",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-4-2",
  "type": "Definition",
  "number": "2.3.11",
  "title": "",
  "body": " A power series centered at is an infinite sum . The are the coefficients of the power series. This sum defines a function of provided that it converges.  A Dirichlet series is an infinite sum . Again, the are coefficients of the Dirichlet series. The sum defines a function of provided that it converges.  "
},
{
  "id": "sec-af1-mobius-inversion",
  "level": "1",
  "url": "sec-af1-mobius-inversion.html",
  "type": "Section",
  "number": "2.4",
  "title": "Möbius inversion",
  "body": " Möbius inversion  "
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
