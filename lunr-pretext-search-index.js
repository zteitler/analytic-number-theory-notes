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
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": "For , . "
},
{
  "id": "sec-bertrand-pnt-7",
  "level": "2",
  "url": "sec-bertrand-pnt.html#sec-bertrand-pnt-7",
  "type": "Exercise",
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
  "type": "Exercise",
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
  "body": " Dirichlet product   Basic properties of Dirichlet product  Let be arithmetic functions. The Dirichlet product of and , denoted , is the arithmetic function defined by where the first sum is over positive divisors of and the second sum is over pairs of positive integers whose product is .    : Here is the Euler totient function, is the function for all , and is the function for all . We have shown that . We can rewrite this as , where the left hand side is . This shows that as claimed.   Other notable operations on arithmetic functions include:  The sum:   The pointwise product:   The composition: (assuming has values in , the domain of )  The Cauchy product, defined by . (I'm not sure if there is a common notation for the Cauchy product.)     The Dirichlet product is associative, commutative, and distributes over the sum. The function (defined by if , otherwise ) is an identity for the Dirichlet product, that is, for any arithmetic function .   For associativity:   For commutativity:   Distributivity is left as an exercise.  Let be any arithmetic function. Then , since for all other than . So .     Let be an arithmetic function. There exists a Dirichlet inverse such that if and only if . If , then is defined recursively by and for , .   If then , so . The converse direction is left as an exercise.      Dirichlet product of multiplicative functions   If are both multiplicative, then so is .   Suppose . Observe that if then there exist factorizations , , such that and . (Simply, is the product of prime factors that are in and , is the product of prime factors that are in and , and so on.) Observe that in this factorization, .  Now we have . This shows that is multiplicative.     For all , is multiplicative.   Let , so is multiplicative (in fact, completely multiplicative). Then where denotes the arithmetic function for all . Here is completely multiplicative. Since and are multiplicative, so is .     Even if both and are completely multiplicative, in general is only multiplicative, not necessarily completely multiplicative. For example let , then , the number of positive divisors of . This is multiplicative but not completely multiplicative, for example .    Let be a multiplicative function. For all we have .  (Recall that means , but .) An equivalent way to write this theorem is .   The left hand side is . Since and are multiplicative, then so is . Let have prime factorization . It follows that . Finally note .     Let be arithmetic functions. If and are multiplicative, then so is .   First of all we have and since and are multiplicative. By definition of Dirichlet product, . Therefore . We have , that is, for .  We will prove the following statement by induction on : for all such that and . We have seen that this holds for . Suppose inductively that it holds for , and suppose are positive integers such that and . Since is multiplicative we have . Here we use that for , where since and ; we use that and that is multiplicative; at the end we use that is multiplicative.  It follows that .     If is multiplicative then its Dirichlet inverse is also multiplicative.   Both and are multiplicative.     The set of arithmetic functions with is an abelian group under Dirichlet product. The subset consisting of multiplicative functions is a subgroup.     Explanation of Dirichlet product   A power series centered at is an infinite sum . The are the coefficients of the power series. This sum defines a function of provided that it converges.  A Dirichlet series is an infinite sum . Again, the are coefficients of the Dirichlet series. The sum defines a function of provided that it converges.   Multiplication of power series corresponds to the Cauchy product of coefficients, and multiplication of Dirichlet series corresponds to the Dirichlet product of coefficients.  Let us multiply two power series: That is, This shows that the product of power series with sequences of coefficients and is given by the power series with coefficients given by the Cauchy product of and .  Similarly, the Dirichlet product corresponds to multiplication of Dirichlet series. Let us multiply two Dirichlet series: In general,    "
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
  "id": "theorem-dirichlet-product-of-multiplicative-functions",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#theorem-dirichlet-product-of-multiplicative-functions",
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
  "type": "Corollary",
  "number": "2.3.8",
  "title": "",
  "body": " Let be a multiplicative function. For all we have .  (Recall that means , but .) An equivalent way to write this theorem is .   The left hand side is . Since and are multiplicative, then so is . Let have prime factorization . It follows that . Finally note .   "
},
{
  "id": "sec-af1-dirichlet-product-3-6",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-3-6",
  "type": "Theorem",
  "number": "2.3.9",
  "title": "",
  "body": " Let be arithmetic functions. If and are multiplicative, then so is .   First of all we have and since and are multiplicative. By definition of Dirichlet product, . Therefore . We have , that is, for .  We will prove the following statement by induction on : for all such that and . We have seen that this holds for . Suppose inductively that it holds for , and suppose are positive integers such that and . Since is multiplicative we have . Here we use that for , where since and ; we use that and that is multiplicative; at the end we use that is multiplicative.  It follows that .   "
},
{
  "id": "sec-af1-dirichlet-product-3-7",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-3-7",
  "type": "Corollary",
  "number": "2.3.10",
  "title": "",
  "body": " If is multiplicative then its Dirichlet inverse is also multiplicative.   Both and are multiplicative.   "
},
{
  "id": "sec-af1-dirichlet-product-3-8",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-3-8",
  "type": "Corollary",
  "number": "2.3.11",
  "title": "",
  "body": " The set of arithmetic functions with is an abelian group under Dirichlet product. The subset consisting of multiplicative functions is a subgroup.  "
},
{
  "id": "sec-af1-dirichlet-product-4-2",
  "level": "2",
  "url": "sec-af1-dirichlet-product.html#sec-af1-dirichlet-product-4-2",
  "type": "Definition",
  "number": "2.3.12",
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
  "body": " Möbius inversion   Möbius function   The following arithmetic functions are all equal:  defined in terms of factorization:   defined in terms of coefficients of a product: For any we define by . Here the product is over all primes that divide , while the sum is over all (positive) divisors of . The symbol is a formal variable; alternatively we can interpret this as saying that the two sides of the equation are equal for all complex numbers . (We follow normal exponent rules, and .) We assert that this function is well-defined in the sense that if and , then has the same coefficient whether the product is taken over the primes that divide , or primes that divide . In fact is the coefficient of in the infinite product over all primes (this is a formal product in the sense that we don't worry about whether it converges).  defined recursively: We define and for , we define by setting .  defined as the Dirichlet inverse of the arithmetic function for all .  That is, for all , .    For example, . This shows that , , , and .  Likewise, . This gives , agreeing with the result when the product was taken over primes instead of . In addition we see that .    The recursive definition of means precisely that . Therefore is the Dirichlet inverse of , so . (Note: Dirichlet inverses are unique: if , then (why?).)  Suppose , , and where the are distinct primes and each . First, each divides as well, so the product in the definition of includes all of the primes appearing in the prime factorization of . If any then , since the product only includes one factor of ; there is no . (Here is where the formal variable plays a role: without it, we could have , and the sum could be rewritten to include a term with denominator . With the however, we have , and we are requiring that the numerators only involve 's, without any .) Otherwise, if each , so , then . This shows that in this case . Finally for we have because the term of the product with denominator is given by multiplying for each prime .  This shows that for all . In particular, doesn't actually depend on which multiple of is used. Therefore . The fact that we can take the infinite product follows from the observation that including factors where has no effect on the coefficient of .  Finally we prove that , which gives . We have by definition. For , say where the are distinct primes and each . Let and write . By definition of , if any then . So in the sum we can ignore such terms, and only include terms such that in the prime factorization, every prime appears with power or .  Let . For a subset let , that is, is the product of primes in the prime factorization of corresponding to elements of . In particular if then . By the definition of , . Now . This shows that , and hence , as claimed.    Alternative proof of  We know that the arithmetic functions and are multiplicative (in fact completely multiplicative). In addition is multiplicative (although not completely multiplicative) (exercise). Therefore is multiplicative by . We compute the value . This shows that for every prime power . Since both and are multiplicative, it follows that .   The function defined in the above theorem is called the Möbius function and we henceforth denote it by .    Möbius function and Dirichlet product  We have seen that . Therefore if and are any arithmetic functions such that , then . This is called Möbius inversion .   Möbius inversion   if and only if . That is, if and only if .  Exercise.   For example we have , and therefore :  For all , .  (As an exercise, how does this relate to our earlier result ?)  This gives another proof that is multiplicative: Since , and and are multiplicative, shows that is multiplicative.  Recall that the Von Mangoldt function is defined by That is, for any prime power , but and when is not a prime power.   We have . That is, for all .   For we have , so . And . So .  Let with prime factorization . For , we have unless is a prime power. Therefore .     For we have .   Since , by Möbius inversion we get . This shows . Now, . The reason is the following. If then , by the recursive version of the definition of . And if then .     "
},
{
  "id": "sec-af1-mobius-inversion-2-2",
  "level": "2",
  "url": "sec-af1-mobius-inversion.html#sec-af1-mobius-inversion-2-2",
  "type": "Theorem",
  "number": "2.4.1",
  "title": "",
  "body": " The following arithmetic functions are all equal:  defined in terms of factorization:   defined in terms of coefficients of a product: For any we define by . Here the product is over all primes that divide , while the sum is over all (positive) divisors of . The symbol is a formal variable; alternatively we can interpret this as saying that the two sides of the equation are equal for all complex numbers . (We follow normal exponent rules, and .) We assert that this function is well-defined in the sense that if and , then has the same coefficient whether the product is taken over the primes that divide , or primes that divide . In fact is the coefficient of in the infinite product over all primes (this is a formal product in the sense that we don't worry about whether it converges).  defined recursively: We define and for , we define by setting .  defined as the Dirichlet inverse of the arithmetic function for all .  That is, for all , .  "
},
{
  "id": "sec-af1-mobius-inversion-2-3",
  "level": "2",
  "url": "sec-af1-mobius-inversion.html#sec-af1-mobius-inversion-2-3",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": " For example, . This shows that , , , and .  Likewise, . This gives , agreeing with the result when the product was taken over primes instead of . In addition we see that .  "
},
{
  "id": "sec-af1-mobius-inversion-2-4",
  "level": "2",
  "url": "sec-af1-mobius-inversion.html#sec-af1-mobius-inversion-2-4",
  "type": "Proof",
  "number": "2.4.1.1",
  "title": "",
  "body": " The recursive definition of means precisely that . Therefore is the Dirichlet inverse of , so . (Note: Dirichlet inverses are unique: if , then (why?).)  Suppose , , and where the are distinct primes and each . First, each divides as well, so the product in the definition of includes all of the primes appearing in the prime factorization of . If any then , since the product only includes one factor of ; there is no . (Here is where the formal variable plays a role: without it, we could have , and the sum could be rewritten to include a term with denominator . With the however, we have , and we are requiring that the numerators only involve 's, without any .) Otherwise, if each , so , then . This shows that in this case . Finally for we have because the term of the product with denominator is given by multiplying for each prime .  This shows that for all . In particular, doesn't actually depend on which multiple of is used. Therefore . The fact that we can take the infinite product follows from the observation that including factors where has no effect on the coefficient of .  Finally we prove that , which gives . We have by definition. For , say where the are distinct primes and each . Let and write . By definition of , if any then . So in the sum we can ignore such terms, and only include terms such that in the prime factorization, every prime appears with power or .  Let . For a subset let , that is, is the product of primes in the prime factorization of corresponding to elements of . In particular if then . By the definition of , . Now . This shows that , and hence , as claimed.  "
},
{
  "id": "sec-af1-mobius-inversion-2-5",
  "level": "2",
  "url": "sec-af1-mobius-inversion.html#sec-af1-mobius-inversion-2-5",
  "type": "Proof",
  "number": "2.4.1.2",
  "title": "Alternative proof of <span class=\"process-math\">\\(\\mu_1=\\mu_4\\)<\/span>.",
  "body": " Alternative proof of  We know that the arithmetic functions and are multiplicative (in fact completely multiplicative). In addition is multiplicative (although not completely multiplicative) (exercise). Therefore is multiplicative by . We compute the value . This shows that for every prime power . Since both and are multiplicative, it follows that .  "
},
{
  "id": "sec-af1-mobius-inversion-2-6",
  "level": "2",
  "url": "sec-af1-mobius-inversion.html#sec-af1-mobius-inversion-2-6",
  "type": "Definition",
  "number": "2.4.3",
  "title": "",
  "body": "The function defined in the above theorem is called the Möbius function and we henceforth denote it by . "
},
{
  "id": "sec-af1-mobius-inversion-3-3",
  "level": "2",
  "url": "sec-af1-mobius-inversion.html#sec-af1-mobius-inversion-3-3",
  "type": "Theorem",
  "number": "2.4.4",
  "title": "Möbius inversion.",
  "body": " Möbius inversion   if and only if . That is, if and only if .  Exercise.  "
},
{
  "id": "sec-af1-mobius-inversion-3-4-3",
  "level": "2",
  "url": "sec-af1-mobius-inversion.html#sec-af1-mobius-inversion-3-4-3",
  "type": "Corollary",
  "number": "2.4.5",
  "title": "",
  "body": " For all , .  "
},
{
  "id": "sec-af1-mobius-inversion-3-7",
  "level": "2",
  "url": "sec-af1-mobius-inversion.html#sec-af1-mobius-inversion-3-7",
  "type": "Theorem",
  "number": "2.4.6",
  "title": "",
  "body": " We have . That is, for all .   For we have , so . And . So .  Let with prime factorization . For , we have unless is a prime power. Therefore .   "
},
{
  "id": "sec-af1-mobius-inversion-3-8",
  "level": "2",
  "url": "sec-af1-mobius-inversion.html#sec-af1-mobius-inversion-3-8",
  "type": "Corollary",
  "number": "2.4.7",
  "title": "",
  "body": " For we have .   Since , by Möbius inversion we get . This shows . Now, . The reason is the following. If then , by the recursive version of the definition of . And if then .   "
},
{
  "id": "sec-elementary-properties",
  "level": "1",
  "url": "sec-elementary-properties.html",
  "type": "Section",
  "number": "3.1",
  "title": "Elementary properties of the floor function",
  "body": " Elementary properties of the floor function  The floor function has many elementary properties listed in the textbook. Here are a few.   For any real numbers and , and integer :              For the first statement, is an integer which is less than or equal to . Since is defined as the greatest integer less than or equal to , it must be that this integer is less than or equal to the greatest integer, so .  On the other hand, is an integer which is less than or equal to . Therefore . This shows that .  For the second statement, observe that is an integer which is less than or equal to . Therefore it is less than or equal to .  As before, is an integer which is less than or equal to . We have (in fact, strictly less) (because if then , contradicting the maximality of ). Putting it together we have . Therefore .  Finally, to see that , observe that if and only if .    "
},
{
  "id": "sec-elementary-properties-3",
  "level": "2",
  "url": "sec-elementary-properties.html#sec-elementary-properties-3",
  "type": "Proposition",
  "number": "3.1.1",
  "title": "",
  "body": " For any real numbers and , and integer :              For the first statement, is an integer which is less than or equal to . Since is defined as the greatest integer less than or equal to , it must be that this integer is less than or equal to the greatest integer, so .  On the other hand, is an integer which is less than or equal to . Therefore . This shows that .  For the second statement, observe that is an integer which is less than or equal to . Therefore it is less than or equal to .  As before, is an integer which is less than or equal to . We have (in fact, strictly less) (because if then , contradicting the maximality of ). Putting it together we have . Therefore .  Finally, to see that , observe that if and only if .   "
},
{
  "id": "sec-hermite-identity",
  "level": "1",
  "url": "sec-hermite-identity.html",
  "type": "Section",
  "number": "3.2",
  "title": "Hermite’s Identity",
  "body": " Hermite's Identity   Hermite's Identity  For any real and positive integer ,    If the statement says: . If the sum is: . Say . If then and because . Otherwise if then because .  The textbook gives several generalizations of this theorem, for example summing where can be a different integer than . For class we'll just give a direct proof of Hermite's identity rather than one of the generalizations.   Let be the integer such that , in other words . Write where . Observe that . In particular .  For we have . That is, . Then .  For we have . So . Therefore .  Now the sum in Hermite's identity has terms that are equal to , and terms that are equal to . So the sum is equal to , which is equal to .   "
},
{
  "id": "sec-hermite-identity-2",
  "level": "2",
  "url": "sec-hermite-identity.html#sec-hermite-identity-2",
  "type": "Theorem",
  "number": "3.2.1",
  "title": "Hermite’s Identity.",
  "body": " Hermite's Identity  For any real and positive integer ,   "
},
{
  "id": "sec-hermite-identity-3",
  "level": "2",
  "url": "sec-hermite-identity.html#sec-hermite-identity-3",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "If the statement says: . If the sum is: . Say . If then and because . Otherwise if then because . "
},
{
  "id": "sec-hermite-identity-5",
  "level": "2",
  "url": "sec-hermite-identity.html#sec-hermite-identity-5",
  "type": "Proof",
  "number": "3.2.1",
  "title": "",
  "body": " Let be the integer such that , in other words . Write where . Observe that . In particular .  For we have . That is, . Then .  For we have . So . Therefore .  Now the sum in Hermite's identity has terms that are equal to , and terms that are equal to . So the sum is equal to , which is equal to .  "
},
{
  "id": "sec-hermite-applications",
  "level": "1",
  "url": "sec-hermite-applications.html",
  "type": "Section",
  "number": "3.3",
  "title": "Applications of Hermite’s Identity",
  "body": " Applications of Hermite's Identity  Here are a few examples illustrating uses of Hermite's identity.   Let . Then .   For sufficiently large , observe that (as soon as ). So the sum is actually a finite sum.  Now we use Hermite's identity: From we get .  Applying this to the right hand side of the equation, we have and the sum telescopes to which is equal to .     Let and be relatively prime positive integers. Then .   Proof (given in textbook)  Observe that the sum is unchanged if is replaced by . So, . Now, we have seen that . If is not an integer, then . In this case, . In our sum, for , is not an integer, by our assumption that and are relatively prime (why is this?). Therefore . Finally, solving for the sum gives the result.    Proof (using Hermite's identity and lattice point counting)  First, observe that by Hermite's identity. So the sum is .  Next, observe that for and . Therefore . This means that the floor of the sum of fractions is either or . So our sum is equal to the number of pairs such that .  Each pair with and corresponds to a lattice point in the rectangle . The pairs such that correspond to lattice points that lie on or above the line defined by . This is the line that cuts the rectangle diagonally from in the upper left to in the lower right.  First, observe that no lattice points lie on the interior of this diagonal line. That is, the only lattice points on this diagonal line, in the segment where it intersects the rectangle, are the endpoints, the corners of the rectangle. This is because of the hypothesis that and are relatively prime. If there were a lattice point on the line, then we could write the slope of the line in two ways, as . But the hypothesis means that is already in lowest terms.  By symmetry, exactly half of the lattice points in the closed rectangle (other than the two corner endpoints of the diagonal) lie above the line, and exactly half lie below. There are lattice points in this closed rectangle. So of them lie above the diagonal.  However we are only counting lattice points in the half-open rectangle . So we have to take away the lattice points on the north and east (upper and right) sides of the rectangle. There are of these (why?). Therefore the number of lattice points, giving us the sum we are seeking, is as claimed.    "
},
{
  "id": "sec-hermite-applications-3",
  "level": "2",
  "url": "sec-hermite-applications.html#sec-hermite-applications-3",
  "type": "Proposition",
  "number": "3.3.1",
  "title": "",
  "body": " Let . Then .   For sufficiently large , observe that (as soon as ). So the sum is actually a finite sum.  Now we use Hermite's identity: From we get .  Applying this to the right hand side of the equation, we have and the sum telescopes to which is equal to .   "
},
{
  "id": "sec-hermite-applications-4",
  "level": "2",
  "url": "sec-hermite-applications.html#sec-hermite-applications-4",
  "type": "Proposition",
  "number": "3.3.2",
  "title": "",
  "body": " Let and be relatively prime positive integers. Then .   Proof (given in textbook)  Observe that the sum is unchanged if is replaced by . So, . Now, we have seen that . If is not an integer, then . In this case, . In our sum, for , is not an integer, by our assumption that and are relatively prime (why is this?). Therefore . Finally, solving for the sum gives the result.    Proof (using Hermite's identity and lattice point counting)  First, observe that by Hermite's identity. So the sum is .  Next, observe that for and . Therefore . This means that the floor of the sum of fractions is either or . So our sum is equal to the number of pairs such that .  Each pair with and corresponds to a lattice point in the rectangle . The pairs such that correspond to lattice points that lie on or above the line defined by . This is the line that cuts the rectangle diagonally from in the upper left to in the lower right.  First, observe that no lattice points lie on the interior of this diagonal line. That is, the only lattice points on this diagonal line, in the segment where it intersects the rectangle, are the endpoints, the corners of the rectangle. This is because of the hypothesis that and are relatively prime. If there were a lattice point on the line, then we could write the slope of the line in two ways, as . But the hypothesis means that is already in lowest terms.  By symmetry, exactly half of the lattice points in the closed rectangle (other than the two corner endpoints of the diagonal) lie above the line, and exactly half lie below. There are lattice points in this closed rectangle. So of them lie above the diagonal.  However we are only counting lattice points in the half-open rectangle . So we have to take away the lattice points on the north and east (upper and right) sides of the rectangle. There are of these (why?). Therefore the number of lattice points, giving us the sum we are seeking, is as claimed.   "
},
{
  "id": "sec-big-o",
  "level": "1",
  "url": "sec-big-o.html",
  "type": "Section",
  "number": "4.1",
  "title": "Big O Notation And Friends",
  "body": " Big O Notation And Friends   Big O Notation  Let and be functions such that for all . We say (or , or ) if there is a constant such that for all sufficiently large ; that is, there exists some such that for all . In other words, is eventually bounded by .  It is equivalent to say that .  Let us compare two closely related conditions:  There exist and such that for all  There exists such that for all  Of course the second condition implies the first one (with ). The first condition often implies the second one. If the ratio is bounded on the interval , say by some value , then we can set to be the maximum of and . The only way this ratio can fail to be bounded is if approaches or approaches . If is bounded and is bounded away from zero (bounded below) then the ratio is bounded. This will be the case if both and are continuous. (Exercise: if is continuous and for all , then there exists such that for all .) Therefore, the two conditions above are equivalent for continuous and (or, with suitable boundedness assumptions instead of continuity). In those cases we can ignore the issue of eventuality . Of course, the values and may be different.  Sometimes the notation represents an unspecified function that is in the sense defined above.      Any polynomial of degree is .  Indeed, let be the largest absolute value of a coefficient of any term in the polynomial; for the polynomial is bounded by since there are at most terms, each bounded by .   if and only if (here we allow ). (Exercise.)  is bounded if and only if is . (Exercise.)  . (Exercise.)  . (Exercise.)  is transitive. (Exercise.)     If and (that is, and ) we write and say that and have the same order of magnitude .  Two polynomials have the same order of magnitude if and only if they have the same degree. Two rational functions (ratios of polynomials) , have the same order of magnitude if and only if .  Is it true in general that if and only if , for any suitable functions ; say assuming they are all strictly positive?    Little o Notation  For with for all , we say (or ) if .   implies , but not conversely.  For we say is asymptotic to , denoted , if . This makes sense as long as for all sufficiently large ; we don't need to assume for all in the domain.  Two polynomials are asymptotic ( ) if and only if they have the same degree and the same leading coefficient.  Even if , the difference may be unbounded. For example, , but the difference . On the other hand, the relative difference  .   "
},
{
  "id": "sec-big-o-2-2",
  "level": "2",
  "url": "sec-big-o.html#sec-big-o-2-2",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "Let and be functions such that for all . We say (or , or ) if there is a constant such that for all sufficiently large ; that is, there exists some such that for all . In other words, is eventually bounded by . "
},
{
  "id": "sec-big-o-2-6",
  "level": "2",
  "url": "sec-big-o.html#sec-big-o-2-6",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "    Any polynomial of degree is .  Indeed, let be the largest absolute value of a coefficient of any term in the polynomial; for the polynomial is bounded by since there are at most terms, each bounded by .   if and only if (here we allow ). (Exercise.)  is bounded if and only if is . (Exercise.)  . (Exercise.)  . (Exercise.)  is transitive. (Exercise.)    "
},
{
  "id": "sec-big-o-2-7",
  "level": "2",
  "url": "sec-big-o.html#sec-big-o-2-7",
  "type": "Definition",
  "number": "4.1.3",
  "title": "",
  "body": "If and (that is, and ) we write and say that and have the same order of magnitude . "
},
{
  "id": "sec-big-o-2-8",
  "level": "2",
  "url": "sec-big-o.html#sec-big-o-2-8",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": "Two polynomials have the same order of magnitude if and only if they have the same degree. Two rational functions (ratios of polynomials) , have the same order of magnitude if and only if . "
},
{
  "id": "sec-big-o-2-9",
  "level": "2",
  "url": "sec-big-o.html#sec-big-o-2-9",
  "type": "Exercise",
  "number": "4.1.5",
  "title": "",
  "body": "Is it true in general that if and only if , for any suitable functions ; say assuming they are all strictly positive? "
},
{
  "id": "sec-big-o-3-2",
  "level": "2",
  "url": "sec-big-o.html#sec-big-o-3-2",
  "type": "Definition",
  "number": "4.1.6",
  "title": "",
  "body": "For with for all , we say (or ) if . "
},
{
  "id": "sec-big-o-3-4",
  "level": "2",
  "url": "sec-big-o.html#sec-big-o-3-4",
  "type": "Definition",
  "number": "4.1.7",
  "title": "",
  "body": "For we say is asymptotic to , denoted , if . This makes sense as long as for all sufficiently large ; we don't need to assume for all in the domain. "
},
{
  "id": "sec-big-o-3-5",
  "level": "2",
  "url": "sec-big-o.html#sec-big-o-3-5",
  "type": "Example",
  "number": "4.1.8",
  "title": "",
  "body": "Two polynomials are asymptotic ( ) if and only if they have the same degree and the same leading coefficient. "
},
{
  "id": "sec-sums-monotone",
  "level": "1",
  "url": "sec-sums-monotone.html",
  "type": "Section",
  "number": "4.2",
  "title": "Sums of Monotone Functions",
  "body": " Sums of Monotone Functions  Our goal here is to compare sums with integrals, . In general these should be close : the integral represents the area under the graph of between and , while the sum represents the total area of a histogram with bars of width and height . This is, roughly, a Riemann sum for the integral. In this section we'll make this more precise.  Let be an interval and . is called monotone on if it is either increasing or decreasing on . (This is meant non-strictly.) is called unimodal on if there exists an such that is (non-strictly) increasing on and (non-strictly) decreasing on .  By standard results in real analysis, every monotone function is integrable (even if it is not continuous). Likewise, every unimodal function is integrable. So, it makes sense to talk about the integrals in this context.  The comparison between sum and integral is straightforward when the interval has integer endpoints:   If and are integers with and is (non-strictly) monotone on , then .   First suppose is monotone increasing. The minimum on the left is and the maximum on the right is . For every integer and every real number we have . Therefore . The first and last equalities are simply integrals of constant values over an interval of length .  Adding up these inequalities gives . Adding to both sides and subtracting the integral to the right gives . The inequality is similar, as is the case that is decreasing instead of increasing (or, deduce the decreasing case by applying the increasing case to ).    When the interval has arbitrary endpoints, we will obtain a similar comparison, although takes a bit more work.  In the following statement, the textbook adds the condition . This seems unnecessary.   If with and is nonnegative and (non-strictly) monotone on , then .   First, take the case . This means that there is no integer such that . Then the sum is empty, so its value is zero. At the same time, the interval has width at most . So the value of the integral is less than or equal to the maximum value of on the interval; by monotonicity this is a value at an endpoint. So the claimed inequality holds in this case.  Now suppose , so there is at least one integer such that . Suppose that is (non-strictly) increasing. We will compare the integral with the sum . This is not precisely a Riemann sum for the integral, but it is close. Let us regard the sum as being equal to the total area of the following figure: for each integer with , we take the rectangle whose base is the interval from to on the horizontal axis, and whose height is equal to ; i.e., the right-hand endpoint of the base interval. So, this is something like a right-hand Riemann sum. It is not precisely a Riemann sum because the first interval may extend to the left of , and the last interval (ending at ) may end to the left of .  So, this sum (that is, the total area of the rectangles) differs from the integral (the total area under the graph of ) in three ways. First, in each interval the rectangle extends above the graph. This is because the function is increasing, and the rectangle's height is given by the height of the right-hand endpoint, ie., the highest endpoint on that interval. So, each rectangle includes a triangle region on top of the graph. Second, the leftmost rectangle includes a vertical strip over the base that is not included in the integral. Third, in contrast, the integral includes a vertical strip of area over the base which is not covered by any rectangle.  First consider the area covered by the rectangles but not the integral. These are the first and second types of error in the previous paragraph. We claim this adds up to at most . This is because the error regions in each rectangle are at disjoint heights: in the rectangle over base , the error region is in heights to . Here, the leftmost strip is an exception, as it may include an error region going down to height . Still, if we horizontally slide these regions into one single strip, they will not overlap. Therefore their total area is at most the width of that strip (which is ) times the height of that strip, which is , the greatest height of any rectangle involved in the sum. So the total of these errors is at most . This is less than or equal to .  Next consider the area covered by the integral but not the rectangles. This is the vertical strip on the right of the region, over the base . This is contained in a rectangle with that same base, and height . The width of that base is at most . So, the area of this rectangle is at most . And then, the error from this source is at most .  Now, the total error, the difference between the sum and the integral, is the difference of these separate errors, namely, the errors counting area in the rectangles but not the integral, and the errors counting area in the integral but not the rectangles. Since each type of error separately is at most (and each of them is nonnegative), then their difference has magnitude at most . In other words, we have as claimed.  What remains is to show the other case, if is decreasing. This follows similarly (using the left-hand sum).     If and is nonnegative and monotone on , then .   I believe the intention here is to regard as a fixed number, and everything else as a function of . The sum and the integral are functions of explicitly. If is increasing, then . If is decreasing, then .   We have seen that for all . So where ; this is . .   If is nonnegative and unimodal on then .   The book says that should be unimodal on . But requiring to be unimodal on for all is equivalent to requiring to be unimodal on (exercise). And it must be intended to require unimodality for all ; we can require to be unimodal on for a particular , but then doesn't make sense.   Say is increasing for and decreasing for . Then for we have . This is bounded, hence .    Let . Then: . Indeed, .    For , , we have . Indeed, . The maximum on the right is . Evaluating the integral gives the result.    Let . Then: . Exercise.  We have Exercise.  We have . Exercise.  Let . Then: . Exercise.   "
},
{
  "id": "sec-sums-monotone-3",
  "level": "2",
  "url": "sec-sums-monotone.html#sec-sums-monotone-3",
  "type": "Definition",
  "number": "4.2.1",
  "title": "",
  "body": "Let be an interval and . is called monotone on if it is either increasing or decreasing on . (This is meant non-strictly.) is called unimodal on if there exists an such that is (non-strictly) increasing on and (non-strictly) decreasing on . "
},
{
  "id": "sec-sums-monotone-6",
  "level": "2",
  "url": "sec-sums-monotone.html#sec-sums-monotone-6",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "",
  "body": " If and are integers with and is (non-strictly) monotone on , then .   First suppose is monotone increasing. The minimum on the left is and the maximum on the right is . For every integer and every real number we have . Therefore . The first and last equalities are simply integrals of constant values over an interval of length .  Adding up these inequalities gives . Adding to both sides and subtracting the integral to the right gives . The inequality is similar, as is the case that is decreasing instead of increasing (or, deduce the decreasing case by applying the increasing case to ).   "
},
{
  "id": "sec-sums-monotone-9",
  "level": "2",
  "url": "sec-sums-monotone.html#sec-sums-monotone-9",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": " If with and is nonnegative and (non-strictly) monotone on , then .   First, take the case . This means that there is no integer such that . Then the sum is empty, so its value is zero. At the same time, the interval has width at most . So the value of the integral is less than or equal to the maximum value of on the interval; by monotonicity this is a value at an endpoint. So the claimed inequality holds in this case.  Now suppose , so there is at least one integer such that . Suppose that is (non-strictly) increasing. We will compare the integral with the sum . This is not precisely a Riemann sum for the integral, but it is close. Let us regard the sum as being equal to the total area of the following figure: for each integer with , we take the rectangle whose base is the interval from to on the horizontal axis, and whose height is equal to ; i.e., the right-hand endpoint of the base interval. So, this is something like a right-hand Riemann sum. It is not precisely a Riemann sum because the first interval may extend to the left of , and the last interval (ending at ) may end to the left of .  So, this sum (that is, the total area of the rectangles) differs from the integral (the total area under the graph of ) in three ways. First, in each interval the rectangle extends above the graph. This is because the function is increasing, and the rectangle's height is given by the height of the right-hand endpoint, ie., the highest endpoint on that interval. So, each rectangle includes a triangle region on top of the graph. Second, the leftmost rectangle includes a vertical strip over the base that is not included in the integral. Third, in contrast, the integral includes a vertical strip of area over the base which is not covered by any rectangle.  First consider the area covered by the rectangles but not the integral. These are the first and second types of error in the previous paragraph. We claim this adds up to at most . This is because the error regions in each rectangle are at disjoint heights: in the rectangle over base , the error region is in heights to . Here, the leftmost strip is an exception, as it may include an error region going down to height . Still, if we horizontally slide these regions into one single strip, they will not overlap. Therefore their total area is at most the width of that strip (which is ) times the height of that strip, which is , the greatest height of any rectangle involved in the sum. So the total of these errors is at most . This is less than or equal to .  Next consider the area covered by the integral but not the rectangles. This is the vertical strip on the right of the region, over the base . This is contained in a rectangle with that same base, and height . The width of that base is at most . So, the area of this rectangle is at most . And then, the error from this source is at most .  Now, the total error, the difference between the sum and the integral, is the difference of these separate errors, namely, the errors counting area in the rectangles but not the integral, and the errors counting area in the integral but not the rectangles. Since each type of error separately is at most (and each of them is nonnegative), then their difference has magnitude at most . In other words, we have as claimed.  What remains is to show the other case, if is decreasing. This follows similarly (using the left-hand sum).   "
},
{
  "id": "sec-sums-monotone-10",
  "level": "2",
  "url": "sec-sums-monotone.html#sec-sums-monotone-10",
  "type": "Corollary",
  "number": "4.2.4",
  "title": "",
  "body": " If and is nonnegative and monotone on , then .   I believe the intention here is to regard as a fixed number, and everything else as a function of . The sum and the integral are functions of explicitly. If is increasing, then . If is decreasing, then .   We have seen that for all . So where ; this is . . "
},
{
  "id": "sec-sums-monotone-11",
  "level": "2",
  "url": "sec-sums-monotone.html#sec-sums-monotone-11",
  "type": "Corollary",
  "number": "4.2.6",
  "title": "",
  "body": " If is nonnegative and unimodal on then .   The book says that should be unimodal on . But requiring to be unimodal on for all is equivalent to requiring to be unimodal on (exercise). And it must be intended to require unimodality for all ; we can require to be unimodal on for a particular , but then doesn't make sense.   Say is increasing for and decreasing for . Then for we have . This is bounded, hence .  "
},
{
  "id": "sec-sums-monotone-12",
  "level": "2",
  "url": "sec-sums-monotone.html#sec-sums-monotone-12",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": " Let . Then: . Indeed, .  "
},
{
  "id": "sec-sums-monotone-13",
  "level": "2",
  "url": "sec-sums-monotone.html#sec-sums-monotone-13",
  "type": "Example",
  "number": "4.2.9",
  "title": "",
  "body": " For , , we have . Indeed, . The maximum on the right is . Evaluating the integral gives the result.  "
},
{
  "id": "sec-sums-monotone-14",
  "level": "2",
  "url": "sec-sums-monotone.html#sec-sums-monotone-14",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": " Let . Then: . Exercise.  We have Exercise.  We have . Exercise.  Let . Then: . Exercise.  "
},
{
  "id": "sec-summation-by-parts",
  "level": "1",
  "url": "sec-summation-by-parts.html",
  "type": "Section",
  "number": "4.3",
  "title": "Summation by Parts",
  "body": " Summation by Parts   Integration by parts Recall integration by parts: .   Summation by parts   Let and be sequences of complex numbers and let be positive integers. For each , let . Then .   In this theorem, plays the role of and corresponds to the antiderivative ; conversely, corresponds to and the difference corresponds to the differential . Observe that this is a forward difference. (A backwards difference would be . Exercise: find a version of summation by parts using backwards differences.)  Observe that would be , slightly different from the appearing in the theorem. Likewise, the sum on the right hand side has bounds instead of . So, in contrast to integration by parts, the bounds of summation are slightly different. But then, in the case of integration, if we think of summing rectangles (as in Riemann summation), the difference here is just two rectangles (one at each endpoint), and since the rectangles are infinitesimally thin , it doesn't make a difference to include it or not.  Use summation by parts with Riemann sums to prove integration by parts.   Proof of summation by parts  Expand the right hand side and cancel terms.    "
},
{
  "id": "sec-summation-by-parts-3-2",
  "level": "2",
  "url": "sec-summation-by-parts.html#sec-summation-by-parts-3-2",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "",
  "body": " Let and be sequences of complex numbers and let be positive integers. For each , let . Then .  "
},
{
  "id": "sec-summation-by-parts-3-5",
  "level": "2",
  "url": "sec-summation-by-parts.html#sec-summation-by-parts-3-5",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "Use summation by parts with Riemann sums to prove integration by parts. "
},
{
  "id": "sec-summation-by-parts-3-6",
  "level": "2",
  "url": "sec-summation-by-parts.html#sec-summation-by-parts-3-6",
  "type": "Proof",
  "number": "4.3.2.1",
  "title": "Proof of summation by parts.",
  "body": " Proof of summation by parts  Expand the right hand side and cancel terms.  "
},
{
  "id": "sec-riemann-stieltjes",
  "level": "1",
  "url": "sec-riemann-stieltjes.html",
  "type": "Section",
  "number": "4.4",
  "title": "Riemann-Stieltjes Integration",
  "body": " Riemann-Stieltjes Integration   Riemann integral  Recall that the Riemann integral can be defined as a limit of Riemann sums, as follows. Let be a function on an interval and let be a partition of , so that . The norm of is . Let be a tag of the partition , meaning that for each , . The pair is called a tagged partition. The Riemann sum for this data is . The Riemann integral , and is Riemann integrable on the interval , if the limit of Riemann sums converges to , in the sense that for every there exists such that for every tagged partition of norm less than , the Riemann sum is within of .  The Riemann integral enjoys various properties, for example:  The Riemann integral is linear: .  Every continuous function is Riemann integrable.  If and are continuously differentiable on , then integration by parts is valid: .  Riemann integration also has some limitations. For example, if is unbounded on then is not Riemann integrable (the Riemann sums do not converge). (It is possible to assign values to improper integrals via a limiting process.)    Riemann-Stieltjes integration  Let and be functions on an interval . We do not assume they are monotone, positive, differentiable, or even continuous. Let be a tagged partition of the interval as before. To this data we assign the Riemann-Stieltjes sum . If these approach a value as before (for partitions of sufficiently small norm, the sum should be arbitrarily close to a value ) then this limit is the Riemann-Stieltjes integral . If this exists we say is Riemann(-Stieltjes) integrable with respect to on . We write , the set of functions integrable with respect to .  Riemann-Stieltjes integration enjoys some similar properties to those of Riemann integration.    Assume all functions are defined and bounded on .  Riemann-Stieltjes integration is linear as a function of : If on and are constants, then on , and . Likewise, Riemann-Stieltjes integration is linear as a function of : if and on and where are constants, then and .  If is continuous on and is of bounded variation on , then the Riemann-Stieltjes integral exists. In particular, the class of functions of bounded variation includes all monotone functions, and all difference of monotone functions. Thus if is monotone (increasing or decreasing), or where each of is monotone, and is continuous, then the integral exists.  The Riemann-Stieltjes integral satisfies integration by parts: If exists, then exists, and .  If is Riemann integrable on and is continuous on , then (here the right hand side is a Riemann, not Riemann-Stieltjes, integral).      A function has bounded variation on an interval if it satisfies the following condition. First, for a partition of , the variation of with respect to is the sum (note the absolute value signs). The variation of on is the supremum of the variation over all partitions of the interval. We say has bounded variation if this supremum is finite. (It is an easy exercise to show that monotone functions have bounded variation; and not too hard to show that sums and differences of functions of bounded variation have again bounded variation. However, not every continuous function has bounded variation!)    Step functions  A function on is called a step function if there is a partition such that is constant on each interval . (In the terminology of Lebesgue integration, these are simple functions, with the restriction that the level sets are intervals, as opposed to more general measurable sets.) The jump of at each point is defined as the difference between the one-sided limits at , except if is one of the endpoints , in which case the jump is the difference between the one-sided limit and the value at that point.  Every step function has bounded variation. (The variation is equal to the sum of the absolute values of the jumps.)  Every step function is a difference of monotone increasing functions. Here is a simple construction which almost achieves this: Let be the sum of all the positive jumps of between and , and let be the negative of the sum of all the negative jumps of between and . Then and are monotone increasing, and for all which are not jump points of ; that is, for all other than the points in the partition. This simple construction does not give fine control over the values at the jump points. It should be possible to get precisely the step function at all by using one-sided limits more carefully.  The reason we are interested in step functions is that Riemann-Stieltjes integration with respect to a step function is equivalent to a sum. Of course our main interest is in evaluating sums by considering them as integrals (with respect to step functions).   Let be a step function on with respect to a partition . For each let be the jump of at . Let be defined on . Assume that for each , it is not the case that both and are discontinuous from the left at , or both discontinuous from the right at . (It is allowed for to be discontinuous from one side, and from the other side; or for to be discontinuous from both sides, if is continuous; or vice versa.) Then exists and .    "
},
{
  "id": "sec-riemann-stieltjes-3-4",
  "level": "2",
  "url": "sec-riemann-stieltjes.html#sec-riemann-stieltjes-3-4",
  "type": "Theorem",
  "number": "4.4.1",
  "title": "",
  "body": "  Assume all functions are defined and bounded on .  Riemann-Stieltjes integration is linear as a function of : If on and are constants, then on , and . Likewise, Riemann-Stieltjes integration is linear as a function of : if and on and where are constants, then and .  If is continuous on and is of bounded variation on , then the Riemann-Stieltjes integral exists. In particular, the class of functions of bounded variation includes all monotone functions, and all difference of monotone functions. Thus if is monotone (increasing or decreasing), or where each of is monotone, and is continuous, then the integral exists.  The Riemann-Stieltjes integral satisfies integration by parts: If exists, then exists, and .  If is Riemann integrable on and is continuous on , then (here the right hand side is a Riemann, not Riemann-Stieltjes, integral).     "
},
{
  "id": "sec-riemann-stieltjes-4-6",
  "level": "2",
  "url": "sec-riemann-stieltjes.html#sec-riemann-stieltjes-4-6",
  "type": "Theorem",
  "number": "4.4.2",
  "title": "",
  "body": " Let be a step function on with respect to a partition . For each let be the jump of at . Let be defined on . Assume that for each , it is not the case that both and are discontinuous from the left at , or both discontinuous from the right at . (It is allowed for to be discontinuous from one side, and from the other side; or for to be discontinuous from both sides, if is continuous; or vice versa.) Then exists and .  "
},
{
  "id": "sec-abel-summation",
  "level": "1",
  "url": "sec-abel-summation.html",
  "type": "Section",
  "number": "4.5",
  "title": "Abel Summation",
  "body": " Abel Summation   Abel's summation formula  Suppose is a sequence of complex numbers and has a continuous derivative on the interval , where . For each , let . Then .  The function is a step function, with jumps at each integer given by the sequence . Therefore the Riemann-Stieltjes integral gives . By integration by parts, . Since has a continuous derivative on the interval, the last integral is equal to .   "
},
{
  "id": "sec-abel-summation-2",
  "level": "2",
  "url": "sec-abel-summation.html#sec-abel-summation-2",
  "type": "Theorem",
  "number": "4.5.1",
  "title": "Abel’s summation formula.",
  "body": " Abel's summation formula  Suppose is a sequence of complex numbers and has a continuous derivative on the interval , where . For each , let . Then .  The function is a step function, with jumps at each integer given by the sequence . Therefore the Riemann-Stieltjes integral gives . By integration by parts, . Since has a continuous derivative on the interval, the last integral is equal to .  "
},
{
  "id": "sec-euler-summation",
  "level": "1",
  "url": "sec-euler-summation.html",
  "type": "Section",
  "number": "4.6",
  "title": "Euler Summation",
  "body": " Euler Summation   Euler's summation formula  Let be real numbers and assume that has a continuous derivative on . Then (where denotes the fractional part of , and similarly for ).  Observe that is a step function with jump at each integer, so . We apply linearity of the Riemann-Stieltjes integral with respect to , so that . This gives . By integration by parts, and the result follows.   "
},
{
  "id": "sec-euler-summation-2",
  "level": "2",
  "url": "sec-euler-summation.html#sec-euler-summation-2",
  "type": "Theorem",
  "number": "4.6.1",
  "title": "Euler’s summation formula.",
  "body": " Euler's summation formula  Let be real numbers and assume that has a continuous derivative on . Then (where denotes the fractional part of , and similarly for ).  Observe that is a step function with jump at each integer, so . We apply linearity of the Riemann-Stieltjes integral with respect to , so that . This gives . By integration by parts, and the result follows.  "
},
{
  "id": "sec-average-order",
  "level": "1",
  "url": "sec-average-order.html",
  "type": "Section",
  "number": "5.1",
  "title": "Average Order of Growth",
  "body": " Average Order of Growth   Recall some of the previously defined arithmetic functions:  : number of positive divisors of  : sum of positive divisors of  These can oscillate wildly: for example can be arbitrarily large ( ) and it also drops down to infinitely often (specifically, at primes). We can smooth out the oscillations by averaging. That is, for any , we consider the average value of for all up to : . Similarly for and any other arithmetic function.  The book uses capital letters for averages. Thus if is an arithmetic function, then is the average, . Unless confusion seems likely, it may be preferable to use an overline, as in : .  Observe that the domain of the average function is the real numbers rather than the positive integers. At this point, this is a more or less arbitrary choice ( why not ).   Let be an arithmetic function. We say is an average order of if is positive and . Typically we require to be monotone.   The average order is not unique. For example, if is an average order for and for all but finitely many , then is also an average order for . Indeed, the difference between summing and summing is some constant (finite) value; after dividing by , the difference goes to zero as .  Nevertheless we will say the average order instead of an average order , just because it sounds nicer.    Average order of number of divisors   For , the number of positive divisors of , we have . Thus, . The average order of , the number of divisors of , is . That is, .   We have . We used .  From this it follows that . In particular . The fraction on the right goes to zero as , hence as claimed.  Finally, we have seen that . After dividing by we get , matching .      Average order of sum of divisors   For the divisor sum function we have .   We have . We can use to rewrite .  For the term, we use these facts. First, . This is Euler's solution of the Basel problem. For now we will use this without giving a proof (many proofs exist and can be found in various textbooks or online). Second, we have seen that for , . Combining these, . This completes the proof.     The average order of is .   The claim is that . The left hand side is and the right hand side is . The two quantities are asymptotic since .    This is not quite the same thing as saying that the average value of should be . In our statements above we averaged . We have not evaluated the sum or the average of .    .   We have . This completes the proof.      Average order of Euler totient    .   The proof is similar to before. We use , where is the Möbius function. After some algebra very similar to the proof of the previous theorem, . We have mentioned that , so in particular for we get . This completes the proof.      Extensions  We have been concerned with averages (and sums) of arithmetic functions. It would be interesting to investigate other statistical properties such as the standard deviation, or the second, third, and higher moments. (The th moment is simply the average of the th power. Moments are important in statistics and analysis.)  As described in the textbook's chapter notes, there has been some study of modified averages taking, instead of all , just those with for some . It seems there is plenty still to be figured out in that direction.  Another way to modify the sequence would be to fix an irrational number and a parameter and take those such that the fractional part . (This is a way to take a sort of random subset of integers.)   "
},
{
  "id": "sec-average-order-2-4",
  "level": "2",
  "url": "sec-average-order.html#sec-average-order-2-4",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": " Let be an arithmetic function. We say is an average order of if is positive and . Typically we require to be monotone.  "
},
{
  "id": "sec-average-order-3-2",
  "level": "2",
  "url": "sec-average-order.html#sec-average-order-3-2",
  "type": "Theorem",
  "number": "5.1.2",
  "title": "",
  "body": " For , the number of positive divisors of , we have . Thus, . The average order of , the number of divisors of , is . That is, .   We have . We used .  From this it follows that . In particular . The fraction on the right goes to zero as , hence as claimed.  Finally, we have seen that . After dividing by we get , matching .   "
},
{
  "id": "sec-average-order-4-2",
  "level": "2",
  "url": "sec-average-order.html#sec-average-order-4-2",
  "type": "Theorem",
  "number": "5.1.3",
  "title": "",
  "body": " For the divisor sum function we have .   We have . We can use to rewrite .  For the term, we use these facts. First, . This is Euler's solution of the Basel problem. For now we will use this without giving a proof (many proofs exist and can be found in various textbooks or online). Second, we have seen that for , . Combining these, . This completes the proof.   "
},
{
  "id": "sec-average-order-4-3",
  "level": "2",
  "url": "sec-average-order.html#sec-average-order-4-3",
  "type": "Corollary",
  "number": "5.1.4",
  "title": "",
  "body": " The average order of is .   The claim is that . The left hand side is and the right hand side is . The two quantities are asymptotic since .   "
},
{
  "id": "sec-average-order-4-5",
  "level": "2",
  "url": "sec-average-order.html#sec-average-order-4-5",
  "type": "Proposition",
  "number": "5.1.5",
  "title": "",
  "body": "  .   We have . This completes the proof.   "
},
{
  "id": "sec-average-order-5-2",
  "level": "2",
  "url": "sec-average-order.html#sec-average-order-5-2",
  "type": "Theorem",
  "number": "5.1.6",
  "title": "",
  "body": "  .   The proof is similar to before. We use , where is the Möbius function. After some algebra very similar to the proof of the previous theorem, . We have mentioned that , so in particular for we get . This completes the proof.   "
},
{
  "id": "sec-hyperbola-method",
  "level": "1",
  "url": "sec-hyperbola-method.html",
  "type": "Section",
  "number": "5.2",
  "title": "Dirichlet’s Hyperbola Method",
  "body": " Dirichlet's Hyperbola Method  We have seen that . Here we will seek an improvement: replacing the term with a concrete linear function, specifically where is the Euler-Mascheroni constant.   Euler-Mascheroni constant  For integer we have the estimate . The difference is increasing as a function of , because if we think of the sum as a left-hand rule Riemann sum, then each time increases, we are adding a triangle to the difference.  Since the difference is increasing and bounded, it converges to a limit. This limit is called the Euler-Mascheroni constant , denoted because of connections with the gamma function. Numerically, It is an open question whether is rational or irrational (and if it is irrational, whether it is algebraic or transcendental).  In general, . (Why?)    Hyperbola method  Observe: , which means the sum we are interested in is the number of lattice points on or under the hyperbola .   Using more common variable names, we might consider the hyperbola (say), or in other words . If we substitute , , then the hyperbola is transformed to , a more common form of a hyperbola. And this substitution is simply a rotation by degrees.   Our previous estimate came from counting the lattice points on each column with horizontal coordinate , for each : there are lattice points in that column, which is approximately equal to with error; then summing is approximated by an integral.  We can try to improve this idea by breaking the area under the hyperbola into three (overlapping) regions: the region , the region , and the region . The first region is the left part of the area, consisting of the arm pointing upwards plus the square under that arm. The second region is the right part , and the third region is the square between the two arms (with the two arms attached to its right and top sides).  The number of lattice points in the square is simply .  The number of points in the left part is .  Likewise the number of lattice points in the right part is by symmetry the same.  So, the total number of lattice points is .   Write . We have seen that . It has been shown that ; on the other hand, is not . It is an open problem to find the infimum of such that is .    "
},
{
  "id": "sec-hyperbola-method-4-3",
  "level": "2",
  "url": "sec-hyperbola-method.html#sec-hyperbola-method-4-3",
  "type": "Remark",
  "number": "5.2.1",
  "title": "",
  "body": " Using more common variable names, we might consider the hyperbola (say), or in other words . If we substitute , , then the hyperbola is transformed to , a more common form of a hyperbola. And this substitution is simply a rotation by degrees.  "
},
{
  "id": "sec-hyperbola-method-4-10",
  "level": "2",
  "url": "sec-hyperbola-method.html#sec-hyperbola-method-4-10",
  "type": "Remark",
  "number": "5.2.2",
  "title": "",
  "body": " Write . We have seen that . It has been shown that ; on the other hand, is not . It is an open problem to find the infimum of such that is .  "
},
{
  "id": "sec-elementary-results",
  "level": "1",
  "url": "sec-elementary-results.html",
  "type": "Section",
  "number": "6.1",
  "title": "Elementary results on distribution of primes",
  "body": " Elementary results on distribution of primes   For , . For , .   We have , , , , and . Meanwhile, , , , and . So indeed . For we have . So in the sums for and , all terms with are greater for than for . This shows that for .  The difference between and is . This difference is always nonnegative because each .     For every , we have . In particular, .   We already proved the first statement. For the second one, . Despite appearances, this is actually a finite sum: We have for . So if , in other words if . Therefore . The largest term is (for ) and the number of terms is at most . Therefore the sum is bounded above, .  Furthermore, since there are at at most terms. With this we get . After simplifying with we have the claimed result.     Observe that twice in the above proof we bounded sums in the same way: bounding each term (every is less than or equal to the largest one, which is ; every is less than or equal to , when ), and bounding the number of terms (in particular, a sum over primes has at most terms).   The previous theorem gives a comparison between and . Now we give similar comparisons between and the prime counting function .   For we have and .   The proof uses the Riemann-Stieltjes integral and integration by parts. Define a sequence by if is a prime number and otherwise. Then , and . Here are the reasons for each step.  : This is by the definition of  : This is by the definition of  : This the Riemann-Stieltjes integral  : Here we have used integration by parts  : For ,    The second claim follows similarly. Let if is prime, otherwise. Then , and where we once again used the Riemann-Stelejes integral, and integration by parts.    One reason to care about the Chebyshev functions is that they give equivalent statements to the Prime Number Theorem:   The following statements are equivalent:            We have . Dividing by gives . Assume that . We need to show that the integral term goes to zero. In this case we have . Therefore , because there is a threshold and constant such that for , ; then for , . Notice that these integrals diverge to infinity as . The error (difference) between and is some constant amount; eventually it is insignificant compared to the integrals from to , for large (and we can replace with, say, ).  So, we have: We can bound the last integral in a similar way to previous bounds of sums: the maximum value of the integrand on this interval is (because the function is monotone decreasing) and the length of the interval is less than . So the value of the integral is less than or equal to . This gives us: . So the error term (the integral) is bounded by a constant. But we want a stronger result: we want the error to go to zero.  We can get this by a trick that is slightly reminiscent of the hyperbola method: we split the interval of integration into two parts as follows. . This does go to zero. Therefore, if , then as well.   By splitting the interval of integration into two parts, we have one part where the bound for the integrand is the same ( ) but the interval is shorter ( instead of ) and another part where the interval is the same length (or rather, we use the same bound for its length) but the integrand is bounded by a smaller amount ( instead of ).   The converse ( implies ) is similar.  From our comparison of and we have . Therefore , so .    "
},
{
  "id": "sec-elementary-results-2",
  "level": "2",
  "url": "sec-elementary-results.html#sec-elementary-results-2",
  "type": "Theorem",
  "number": "6.1.1",
  "title": "",
  "body": " For , . For , .   We have , , , , and . Meanwhile, , , , and . So indeed . For we have . So in the sums for and , all terms with are greater for than for . This shows that for .  The difference between and is . This difference is always nonnegative because each .   "
},
{
  "id": "sec-elementary-results-3",
  "level": "2",
  "url": "sec-elementary-results.html#sec-elementary-results-3",
  "type": "Theorem",
  "number": "6.1.2",
  "title": "",
  "body": " For every , we have . In particular, .   We already proved the first statement. For the second one, . Despite appearances, this is actually a finite sum: We have for . So if , in other words if . Therefore . The largest term is (for ) and the number of terms is at most . Therefore the sum is bounded above, .  Furthermore, since there are at at most terms. With this we get . After simplifying with we have the claimed result.   "
},
{
  "id": "sec-elementary-results-4",
  "level": "2",
  "url": "sec-elementary-results.html#sec-elementary-results-4",
  "type": "Remark",
  "number": "6.1.3",
  "title": "",
  "body": " Observe that twice in the above proof we bounded sums in the same way: bounding each term (every is less than or equal to the largest one, which is ; every is less than or equal to , when ), and bounding the number of terms (in particular, a sum over primes has at most terms).  "
},
{
  "id": "sec-elementary-results-6",
  "level": "2",
  "url": "sec-elementary-results.html#sec-elementary-results-6",
  "type": "Theorem",
  "number": "6.1.4",
  "title": "",
  "body": " For we have and .   The proof uses the Riemann-Stieltjes integral and integration by parts. Define a sequence by if is a prime number and otherwise. Then , and . Here are the reasons for each step.  : This is by the definition of  : This is by the definition of  : This the Riemann-Stieltjes integral  : Here we have used integration by parts  : For ,    The second claim follows similarly. Let if is prime, otherwise. Then , and where we once again used the Riemann-Stelejes integral, and integration by parts.   "
},
{
  "id": "sec-elementary-results-8",
  "level": "2",
  "url": "sec-elementary-results.html#sec-elementary-results-8",
  "type": "Theorem",
  "number": "6.1.5",
  "title": "",
  "body": " The following statements are equivalent:            We have . Dividing by gives . Assume that . We need to show that the integral term goes to zero. In this case we have . Therefore , because there is a threshold and constant such that for , ; then for , . Notice that these integrals diverge to infinity as . The error (difference) between and is some constant amount; eventually it is insignificant compared to the integrals from to , for large (and we can replace with, say, ).  So, we have: We can bound the last integral in a similar way to previous bounds of sums: the maximum value of the integrand on this interval is (because the function is monotone decreasing) and the length of the interval is less than . So the value of the integral is less than or equal to . This gives us: . So the error term (the integral) is bounded by a constant. But we want a stronger result: we want the error to go to zero.  We can get this by a trick that is slightly reminiscent of the hyperbola method: we split the interval of integration into two parts as follows. . This does go to zero. Therefore, if , then as well.   By splitting the interval of integration into two parts, we have one part where the bound for the integrand is the same ( ) but the interval is shorter ( instead of ) and another part where the interval is the same length (or rather, we use the same bound for its length) but the integrand is bounded by a smaller amount ( instead of ).   The converse ( implies ) is similar.  From our comparison of and we have . Therefore , so .   "
},
{
  "id": "sec-chebyshev-estimates",
  "level": "1",
  "url": "sec-chebyshev-estimates.html",
  "type": "Section",
  "number": "6.2",
  "title": "Chebyshev’s Estimates",
  "body": " Chebyshev's Estimates  Chebyshev gave the first concrete results toward proving the Prime Number Theorem (which at that time was a conjecture of Legendre and Gauss).   Chebyshev's estimate  We have . In fact, uniformly for . More explicitly, for all and for all .   Recall that means and . That is, there are constants such that and for all sufficiently large . And uniformly for means this holds for all .    and . Explicitly, for and for all ; for all , and for all .     , .   The proofs are a bit long and we won't go over them in class. (An exception is the proof that , which seems to be short and elementary, and very similar to the proof given in class of the Bertrand Postulate).  "
},
{
  "id": "sec-chebyshev-estimates-3",
  "level": "2",
  "url": "sec-chebyshev-estimates.html#sec-chebyshev-estimates-3",
  "type": "Theorem",
  "number": "6.2.1",
  "title": "Chebyshev’s estimate.",
  "body": " Chebyshev's estimate  We have . In fact, uniformly for . More explicitly, for all and for all .  "
},
{
  "id": "sec-chebyshev-estimates-4",
  "level": "2",
  "url": "sec-chebyshev-estimates.html#sec-chebyshev-estimates-4",
  "type": "Remark",
  "number": "6.2.2",
  "title": "",
  "body": "Recall that means and . That is, there are constants such that and for all sufficiently large . And uniformly for means this holds for all . "
},
{
  "id": "sec-chebyshev-estimates-5",
  "level": "2",
  "url": "sec-chebyshev-estimates.html#sec-chebyshev-estimates-5",
  "type": "Corollary",
  "number": "6.2.3",
  "title": "",
  "body": "  and . Explicitly, for and for all ; for all , and for all .  "
},
{
  "id": "sec-chebyshev-estimates-6",
  "level": "2",
  "url": "sec-chebyshev-estimates.html#sec-chebyshev-estimates-6",
  "type": "Remark",
  "number": "6.2.4",
  "title": "",
  "body": "  , .  "
},
{
  "id": "sec-mertens",
  "level": "1",
  "url": "sec-mertens.html",
  "type": "Section",
  "number": "6.3",
  "title": "Mertens’ Theorems",
  "body": " Mertens' Theorems   Mertens' Theorem  For we have where and are constants. In fact is the Euler-Mascheroni constant.   First, this preparation. We have an earlier result, that , see . (The details of the proof were left as an exercise, but basically this followed from comparing the sum with the integral .) We will combine this with the following lemma.   For we have .  We have .    Proof of  We claim that .  Start from . Dropping the floor operator gives . By Chebyshev's estimate, . Therefore . Dividing by gives the result.    Proof of  We claim that .  We have . Our goal is to show that the last sum is bounded. We have . This last sum is convergent: for large enough , , and we can compare the resulting series to a -series.  So, there is a constant with , for all . In other words, this last sum is (as a function of ). Therefore     Proof of  We claim that .  Set . We have just seen that . We will write this as , where .  We can write the sum we are interested in as follows: . We can rewrite this as an integral, specifically as a Riemann-Stieltjes integral . First, we find the differential . For , . But, for any value of , and small enough , there are no primes (in fact, not even any integers) in the interval . On the other hand, for , . In the limit as , this is equal to if is prime, or equal to if is not equal to a prime.  So, our sum is equal to . Here the lower bound of integration means for sufficiently small , in fact the limit as . (We want the interval of integration to start to the left of because we are using left-hand differentials for .)  Next, we evaluate the integral, starting with integration by parts: . We have so the first term is simply . From this point, we can take the integral to be simply . We use : and . The integral of the first term can be evaluated (by substitution with ): . Before we address the integral of the second term, let us put together what we have seen so far: .  Now we consider the integral appearing as the last term on the right. By the same substitution again we see . Hence the following improper integral converges: . This implies converges as well. Since , it implies that the following improper integrals also converge: (but of course, the value might not be any more). Since the integrals converge, it is valid to write . The integral from to is constant with respect to . For the other interval, since (recall that this notation means ), we have or in other words the integral on the left hand side is .  Putting together our results so far we have . To finish, we combine big-O terms, and set to get as claimed.    Last semester we saw Erdős's proof that the sum diverges. Now, we have another proof, which not only shows divergence, but also shows how slowly it diverges.  The estimate may have been known to Euler, but without a proof.    Proof of  We claim that .  The product on the left side of is the reciprocal of the product on the left side of . Thus, assuming for the moment , we have which proves the claim.    Proof of  We claim that .  First recall the following Taylor series for logarithm: .  Consider the logarithm of the product on the left: . Use for the first term. For the second term, observe that converges. To see this, start with and then observe that the sum over all positive integers converges by telescoping; this implies that the sum over just the primes also converges. So we can replace the sum over with the difference between the sum over all , and the sum over . This gives: . In fact, . Therefore becomes where .  Taking the exponential of each side gives where . We have . Thus , as claimed.   "
},
{
  "id": "sec-mertens-2",
  "level": "2",
  "url": "sec-mertens.html#sec-mertens-2",
  "type": "Theorem",
  "number": "6.3.1",
  "title": "Mertens’ Theorem.",
  "body": " Mertens' Theorem  For we have where and are constants. In fact is the Euler-Mascheroni constant.  "
},
{
  "id": "sec-mertens-4",
  "level": "2",
  "url": "sec-mertens.html#sec-mertens-4",
  "type": "Lemma",
  "number": "6.3.2",
  "title": "",
  "body": " For we have .  We have .  "
},
{
  "id": "sec-mertens-5",
  "level": "2",
  "url": "sec-mertens.html#sec-mertens-5",
  "type": "Proof",
  "number": "6.3.1",
  "title": "Proof of (6.3.1).",
  "body": " Proof of  We claim that .  Start from . Dropping the floor operator gives . By Chebyshev's estimate, . Therefore . Dividing by gives the result.  "
},
{
  "id": "sec-mertens-6",
  "level": "2",
  "url": "sec-mertens.html#sec-mertens-6",
  "type": "Proof",
  "number": "6.3.2",
  "title": "Proof of (6.3.2).",
  "body": " Proof of  We claim that .  We have . Our goal is to show that the last sum is bounded. We have . This last sum is convergent: for large enough , , and we can compare the resulting series to a -series.  So, there is a constant with , for all . In other words, this last sum is (as a function of ). Therefore   "
},
{
  "id": "sec-mertens-7",
  "level": "2",
  "url": "sec-mertens.html#sec-mertens-7",
  "type": "Proof",
  "number": "6.3.3",
  "title": "Proof of (6.3.3).",
  "body": " Proof of  We claim that .  Set . We have just seen that . We will write this as , where .  We can write the sum we are interested in as follows: . We can rewrite this as an integral, specifically as a Riemann-Stieltjes integral . First, we find the differential . For , . But, for any value of , and small enough , there are no primes (in fact, not even any integers) in the interval . On the other hand, for , . In the limit as , this is equal to if is prime, or equal to if is not equal to a prime.  So, our sum is equal to . Here the lower bound of integration means for sufficiently small , in fact the limit as . (We want the interval of integration to start to the left of because we are using left-hand differentials for .)  Next, we evaluate the integral, starting with integration by parts: . We have so the first term is simply . From this point, we can take the integral to be simply . We use : and . The integral of the first term can be evaluated (by substitution with ): . Before we address the integral of the second term, let us put together what we have seen so far: .  Now we consider the integral appearing as the last term on the right. By the same substitution again we see . Hence the following improper integral converges: . This implies converges as well. Since , it implies that the following improper integrals also converge: (but of course, the value might not be any more). Since the integrals converge, it is valid to write . The integral from to is constant with respect to . For the other interval, since (recall that this notation means ), we have or in other words the integral on the left hand side is .  Putting together our results so far we have . To finish, we combine big-O terms, and set to get as claimed.  "
},
{
  "id": "sec-mertens-8",
  "level": "2",
  "url": "sec-mertens.html#sec-mertens-8",
  "type": "Remark",
  "number": "6.3.3",
  "title": "",
  "body": " Last semester we saw Erdős's proof that the sum diverges. Now, we have another proof, which not only shows divergence, but also shows how slowly it diverges.  The estimate may have been known to Euler, but without a proof.  "
},
{
  "id": "sec-mertens-9",
  "level": "2",
  "url": "sec-mertens.html#sec-mertens-9",
  "type": "Proof",
  "number": "6.3.4",
  "title": "Proof of (6.3.5).",
  "body": " Proof of  We claim that .  The product on the left side of is the reciprocal of the product on the left side of . Thus, assuming for the moment , we have which proves the claim.  "
},
{
  "id": "sec-mertens-10",
  "level": "2",
  "url": "sec-mertens.html#sec-mertens-10",
  "type": "Proof",
  "number": "6.3.5",
  "title": "Proof of (6.3.4).",
  "body": " Proof of  We claim that .  First recall the following Taylor series for logarithm: .  Consider the logarithm of the product on the left: . Use for the first term. For the second term, observe that converges. To see this, start with and then observe that the sum over all positive integers converges by telescoping; this implies that the sum over just the primes also converges. So we can replace the sum over with the difference between the sum over all , and the sum over . This gives: . In fact, . Therefore becomes where .  Taking the exponential of each side gives where . We have . Thus , as claimed.  "
},
{
  "id": "sec-overview",
  "level": "1",
  "url": "sec-overview.html",
  "type": "Section",
  "number": "7.1",
  "title": "Overview of Proof of Dirichlet’s Theorem",
  "body": " Overview of Proof of Dirichlet's Theorem   I will add to this overview as I continue to work through the proof.    Repeating the proof of Mertens's theorems  To some extent the proof is a reprise of the proof of Mertens's theorems:  We start with estimating by using a comparison between the sum and integral of a monotone function.  Next, we rewrite this as a sum involving the Von Mangoldt function, , by rewriting the previous sum as a double sum indexed over lattice points under a hyperbola.  This in turn lets us estimate , where we can control the error term thanks to Chebyshev's estimate for the Chebyshev function.  We check that the terms with powers have a convergent sum, so they contribute a bounded amount to the total, in other words an amount. Dropping these terms leaves the sum and only makes an difference.  (For Mertens's theorems our next step was to use Riemann-Stieltjes integration and integration by parts to change the sum to . However we will not take this step in our study of Dirichlet's theorem.)  Our plan is basically to repeat all the same ideas, with the added restriction of summing over a congruence class modulo . How will we do this? The basic idea is to use complex roots of unity.    Complex roots of unity  A complex th root of unity is a complex number (the Greek letter xi) such that . There are such numbers, forming the vertices of a regular -gon inscribed in the unit circle. The th roots of unity are for . They form a group under multiplication. This group is cyclic.  A fundamental fact about roots of unity concerns the sum of roots of unity, or of powers of a root of unity.    Let and let be the th roots of unity. Then .    Geometrically, the points are equally spaced around the origin, so their average or center of gravity is at the origin.  Algebraically, the polynomial factors, . The coefficient of is zero on the left hand side, and is on the right hand side.     Likewise, , and similar statements hold for the sum of products of of the 's.    Let be an th root of unity. Then    If then every and the sum, having terms, is equal to .  Otherwise, suppose that . Let be the order of , the smallest positive integer such that . The assumption means .  Note that must be a divisor of . (This follows from Lagrange's theorem in group theory. Alternatively, if with , then . Since , then as well. The fact that contradicts that is the smallest positive integer such that , unless, of course, is not positive. And this must be the case: , so divides .)  Then the values are th roots of unity, and they are pairwise distinct (why? exercise). So they are in fact all of the th roots of unity. By the previous proposition, .  Finally, the full sum is simply equal to the sum of the first terms, repeated times. This is because , so that each term in the sum is simply a repetition of the term steps earlier. Therefore the full sum is times zero, which is simply zero.     After presenting the above proof, I realized there's a much quicker idea: the sum is a (finite) geometric series. If , the value of the sum is where the numerator because is an th root of unity, and the denominator since .   So, our strategy for Dirichlet's theorem is to consider sums where, for each , is a root of unity chosen in some way. Specifically, we will choose them so that if , then , but otherwise, the will cycle among all the roots of unity. Then we will add together all of these sums, with the result that the terms with will add up, but the other terms will cancel out (add up to zero).   Let . For every prime , define and . Other than , these are nd roots of unity.  Consider the sums (here the root of unity is for all other than ) and . Then and .   We will have to figure out how to choose the roots of unity in general in order to get the cancellation we seek. And we will have to estimate the order of growth of these sums involving the roots of unity. This is our plan!   "
},
{
  "id": "sec-overview-4-4",
  "level": "2",
  "url": "sec-overview.html#sec-overview-4-4",
  "type": "Proposition",
  "number": "7.1.1",
  "title": "",
  "body": "  Let and let be the th roots of unity. Then .    Geometrically, the points are equally spaced around the origin, so their average or center of gravity is at the origin.  Algebraically, the polynomial factors, . The coefficient of is zero on the left hand side, and is on the right hand side.   "
},
{
  "id": "sec-overview-4-5",
  "level": "2",
  "url": "sec-overview.html#sec-overview-4-5",
  "type": "Remark",
  "number": "7.1.2",
  "title": "",
  "body": " Likewise, , and similar statements hold for the sum of products of of the 's.  "
},
{
  "id": "sec-overview-4-6",
  "level": "2",
  "url": "sec-overview.html#sec-overview-4-6",
  "type": "Proposition",
  "number": "7.1.3",
  "title": "",
  "body": " Let be an th root of unity. Then    If then every and the sum, having terms, is equal to .  Otherwise, suppose that . Let be the order of , the smallest positive integer such that . The assumption means .  Note that must be a divisor of . (This follows from Lagrange's theorem in group theory. Alternatively, if with , then . Since , then as well. The fact that contradicts that is the smallest positive integer such that , unless, of course, is not positive. And this must be the case: , so divides .)  Then the values are th roots of unity, and they are pairwise distinct (why? exercise). So they are in fact all of the th roots of unity. By the previous proposition, .  Finally, the full sum is simply equal to the sum of the first terms, repeated times. This is because , so that each term in the sum is simply a repetition of the term steps earlier. Therefore the full sum is times zero, which is simply zero.   "
},
{
  "id": "sec-overview-4-7",
  "level": "2",
  "url": "sec-overview.html#sec-overview-4-7",
  "type": "Remark",
  "number": "7.1.4",
  "title": "",
  "body": " After presenting the above proof, I realized there's a much quicker idea: the sum is a (finite) geometric series. If , the value of the sum is where the numerator because is an th root of unity, and the denominator since .  "
},
{
  "id": "sec-overview-4-9",
  "level": "2",
  "url": "sec-overview.html#sec-overview-4-9",
  "type": "Example",
  "number": "7.1.5",
  "title": "",
  "body": " Let . For every prime , define and . Other than , these are nd roots of unity.  Consider the sums (here the root of unity is for all other than ) and . Then and .  "
},
{
  "id": "sec-characters",
  "level": "1",
  "url": "sec-characters.html",
  "type": "Section",
  "number": "7.2",
  "title": "Characters of finite abelian groups",
  "body": " Characters of finite abelian groups   Definition   Let be a finite abelian group. A character of is a homomorphism , the multiplicative group of nonzero complex numbers.    The definition makes sense for infinite abelian groups, but we will not get into that in this course.    The idea also makes sense for nonabelian groups, but the definition is slightly different, or, more precisely, the general definition of character happens to simplify in the abelian case. In representation theory, a representation of a group is a homomorphism from to a (multiplicative) group of matrices. The character of the representation is the map taking each group element to the trace of the corresponding matrix in the representation. This is generally not a homomorphism; for matrices , is generally not equal to . Also, an invertible matrix can have trace zero, so characters can take the value zero.  However, if it happens that the matrices are , then the trace of the matrix is simply its entry. In this case the character is essentially the same thing as the representation, and it is a homomorphism.  It turns out that for abelian groups we can essentially reduce to the case. So we can more or less conflate characters with representations, and define characters as homomorphisms, with nonzero values.    Let be a finite abelian group of order and let be a character on . For every , is an th root of unity.   By Lagrange's theorem, , the identity in . Then .     The trivial character which takes every element of to is denoted and called the principal character of .  The set of all characters of is denoted (or ) and called the dual group of . We define a multiplication on , pointwise: for , the product is defined by .     For every finite abelian group , the set is a group with the multiplication defined above. The identity element is the principal character. For , the inverse is the character denoted or , defined by or (these are equal).    It is left as an exercise to check that the pointwise multiplication is associative and that the principal character is an identity element. The fact that follows from observing that since is a root of unity, then it has norm ; holds for any complex number of norm (exercise).    Our next goal is to prove that in fact . We start with cyclic groups.   For a real number we define .     Let be a cyclic group of order . There are exactly characters of , given as follows. For each let be defined by . Then . In particular, is cyclic of order .    First we verify that each is a character. We have to check that . This holds because .  Next we check that they are pairwise distinct. Observe that . These are different for different values of in the range . (It is true that , and indeed, . This is why we stop our list at ; continuing would simply repeat the characters already on our list.) Since the functions have different values at the point , they are different functions.  Now we check that every character is one of the . Let be any character of . The value must be an th root of unity. So, it is equal to for some , with . Then for every . Therefore .  Finally, we check that is cyclic. Indeed, for every and , . The fact that this holds for all means . So, the powers of give all the elements of .      For finite abelian groups and , .    We define a mapping as follows. Let and . Define a character on by . This is a homomorphism from to (exercise). It is injective. (If is nonprincipal on or is nonprincipal on , then for some or likewise for some ; hence or similarly , and either way, is nonprincipal on .)  The map is surjective. For any character on , define by and define by . Then is a character on , is a character on , and (exercise).    In particular, if and , then .   Fundamental Theorem of Finite Abelian Groups   Every finite abelian group is a direct product of cyclic groups. That is, any finite abelian group is .    By the Chinese Remainder Theorem, if , then . So if we choose to, we can assume that the decomposition of an arbitrary finite abelian group is into cyclic groups of prime power order.    Let be any finite abelian group. Then . In particular, .    By induction on the number of cyclic factors in a decomposition of as a direct product of cyclic groups.      Sums of character values  We are also interested in taking sums of character values (just as earlier we considered sums of roots of unity).    Let be a cyclic group of order . Then the following hold.   If a character of is given and we sum over elements of , then .    If an element is given and we sum over characters, then        First suppose is given. Then the sum is . Since is an th root of unity, the first claim follows.  Next, suppose is given. Then the sum is . Here, is an th root of unity, so once again the result follows.    (The textbook includes here the result that is cyclic of order when is. I omit that here because we already showed it earlier.)  We will generalize this to non-cyclic groups in the next section.   "
},
{
  "id": "sec-characters-2-2",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-2",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": " Let be a finite abelian group. A character of is a homomorphism , the multiplicative group of nonzero complex numbers.  "
},
{
  "id": "sec-characters-2-3",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-3",
  "type": "Remark",
  "number": "7.2.2",
  "title": "",
  "body": " The definition makes sense for infinite abelian groups, but we will not get into that in this course.  "
},
{
  "id": "sec-characters-2-4",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-4",
  "type": "Remark",
  "number": "7.2.3",
  "title": "",
  "body": " The idea also makes sense for nonabelian groups, but the definition is slightly different, or, more precisely, the general definition of character happens to simplify in the abelian case. In representation theory, a representation of a group is a homomorphism from to a (multiplicative) group of matrices. The character of the representation is the map taking each group element to the trace of the corresponding matrix in the representation. This is generally not a homomorphism; for matrices , is generally not equal to . Also, an invertible matrix can have trace zero, so characters can take the value zero.  However, if it happens that the matrices are , then the trace of the matrix is simply its entry. In this case the character is essentially the same thing as the representation, and it is a homomorphism.  It turns out that for abelian groups we can essentially reduce to the case. So we can more or less conflate characters with representations, and define characters as homomorphisms, with nonzero values.  "
},
{
  "id": "sec-characters-2-5",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-5",
  "type": "Proposition",
  "number": "7.2.4",
  "title": "",
  "body": " Let be a finite abelian group of order and let be a character on . For every , is an th root of unity.   By Lagrange's theorem, , the identity in . Then .   "
},
{
  "id": "sec-characters-2-6",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-6",
  "type": "Definition",
  "number": "7.2.5",
  "title": "",
  "body": " The trivial character which takes every element of to is denoted and called the principal character of .  The set of all characters of is denoted (or ) and called the dual group of . We define a multiplication on , pointwise: for , the product is defined by .  "
},
{
  "id": "sec-characters-2-7",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-7",
  "type": "Proposition",
  "number": "7.2.6",
  "title": "",
  "body": "  For every finite abelian group , the set is a group with the multiplication defined above. The identity element is the principal character. For , the inverse is the character denoted or , defined by or (these are equal).    It is left as an exercise to check that the pointwise multiplication is associative and that the principal character is an identity element. The fact that follows from observing that since is a root of unity, then it has norm ; holds for any complex number of norm (exercise).   "
},
{
  "id": "sec-characters-2-9",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-9",
  "type": "Definition",
  "number": "7.2.7",
  "title": "",
  "body": " For a real number we define .  "
},
{
  "id": "sec-characters-2-10",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-10",
  "type": "Proposition",
  "number": "7.2.8",
  "title": "",
  "body": "  Let be a cyclic group of order . There are exactly characters of , given as follows. For each let be defined by . Then . In particular, is cyclic of order .    First we verify that each is a character. We have to check that . This holds because .  Next we check that they are pairwise distinct. Observe that . These are different for different values of in the range . (It is true that , and indeed, . This is why we stop our list at ; continuing would simply repeat the characters already on our list.) Since the functions have different values at the point , they are different functions.  Now we check that every character is one of the . Let be any character of . The value must be an th root of unity. So, it is equal to for some , with . Then for every . Therefore .  Finally, we check that is cyclic. Indeed, for every and , . The fact that this holds for all means . So, the powers of give all the elements of .   "
},
{
  "id": "sec-characters-2-11",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-11",
  "type": "Proposition",
  "number": "7.2.9",
  "title": "",
  "body": "  For finite abelian groups and , .    We define a mapping as follows. Let and . Define a character on by . This is a homomorphism from to (exercise). It is injective. (If is nonprincipal on or is nonprincipal on , then for some or likewise for some ; hence or similarly , and either way, is nonprincipal on .)  The map is surjective. For any character on , define by and define by . Then is a character on , is a character on , and (exercise).   "
},
{
  "id": "sec-characters-2-13",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-13",
  "type": "Theorem",
  "number": "7.2.10",
  "title": "Fundamental Theorem of Finite Abelian Groups.",
  "body": " Fundamental Theorem of Finite Abelian Groups   Every finite abelian group is a direct product of cyclic groups. That is, any finite abelian group is .   "
},
{
  "id": "sec-characters-2-15",
  "level": "2",
  "url": "sec-characters.html#sec-characters-2-15",
  "type": "Corollary",
  "number": "7.2.11",
  "title": "",
  "body": "  Let be any finite abelian group. Then . In particular, .    By induction on the number of cyclic factors in a decomposition of as a direct product of cyclic groups.   "
},
{
  "id": "sec-characters-3-3",
  "level": "2",
  "url": "sec-characters.html#sec-characters-3-3",
  "type": "Theorem",
  "number": "7.2.12",
  "title": "",
  "body": "  Let be a cyclic group of order . Then the following hold.   If a character of is given and we sum over elements of , then .    If an element is given and we sum over characters, then        First suppose is given. Then the sum is . Since is an th root of unity, the first claim follows.  Next, suppose is given. Then the sum is . Here, is an th root of unity, so once again the result follows.   "
},
{
  "id": "sec-orthogonality",
  "level": "1",
  "url": "sec-orthogonality.html",
  "type": "Section",
  "number": "7.3",
  "title": "Orthogonality relations",
  "body": " Orthogonality relations   Let be a finite abelian group and let be a nonidentity element of . Then there exists such that .   Fix an isomorphism . Let correspond to the tuple . There is some such that . Define the character as , where, for all , is the principal character on the th factor , and for , the character defined previously on the factor .  Then we have . Specifically, because .    This lemma, for more general (infinite) groups, is known as the Peter-Weyl theorem (more precisely, it is part of the Peter-Weyl theorem).  Now we can consider sums of character values over an arbitrary (not cyclic) finite abelian group.   Let be a finite abelian group. Then:  If a character of is given, then .  If an element of is given, then .     If then for all . Likewise if then for all . In those cases the sum is (we use ).  Now, given , let . We have, for any , , that is, . If is non-principal then (by definition) there is some such that . With this choice of it follows that .  Similarly, given , let . For any , consider . Here we are using that is a group, so . We get that . By the previous lemma, if , there is some so that . Then , as claimed.     Let be a finite abelian group. Then:  For any we have: .  For any we have: .     Recall that . So . By the previous result, the sum is either equal to if , the principal character, or else is equal to . Since is the identity element in , then if and only if .  Similarly, . Therefore the sum is either equal to if , or else is equal to .     We won't pursue this idea much further, but it is worth mentioning: We can define inner products on and on by . These are not exactly inner products because and are not vector spaces. So we can consider the vector spaces with and as bases; or, even better, the group algebras of and . Without getting into the definitions of those, we'll just remark that the previous theorem means that the elements of form an orthonormal basis for their group algebra, and likewise, the elements of form an orthonormal basis for their group algebra.   "
},
{
  "id": "sec-orthogonality-2",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-2",
  "type": "Lemma",
  "number": "7.3.1",
  "title": "",
  "body": " Let be a finite abelian group and let be a nonidentity element of . Then there exists such that .   Fix an isomorphism . Let correspond to the tuple . There is some such that . Define the character as , where, for all , is the principal character on the th factor , and for , the character defined previously on the factor .  Then we have . Specifically, because .   "
},
{
  "id": "sec-orthogonality-3",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-3",
  "type": "Remark",
  "number": "7.3.2",
  "title": "",
  "body": "This lemma, for more general (infinite) groups, is known as the Peter-Weyl theorem (more precisely, it is part of the Peter-Weyl theorem). "
},
{
  "id": "sec-orthogonality-5",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-5",
  "type": "Theorem",
  "number": "7.3.3",
  "title": "",
  "body": " Let be a finite abelian group. Then:  If a character of is given, then .  If an element of is given, then .     If then for all . Likewise if then for all . In those cases the sum is (we use ).  Now, given , let . We have, for any , , that is, . If is non-principal then (by definition) there is some such that . With this choice of it follows that .  Similarly, given , let . For any , consider . Here we are using that is a group, so . We get that . By the previous lemma, if , there is some so that . Then , as claimed.   "
},
{
  "id": "sec-orthogonality-6",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-6",
  "type": "Theorem",
  "number": "7.3.4",
  "title": "",
  "body": " Let be a finite abelian group. Then:  For any we have: .  For any we have: .     Recall that . So . By the previous result, the sum is either equal to if , the principal character, or else is equal to . Since is the identity element in , then if and only if .  Similarly, . Therefore the sum is either equal to if , or else is equal to .   "
},
{
  "id": "sec-orthogonality-7",
  "level": "2",
  "url": "sec-orthogonality.html#sec-orthogonality-7",
  "type": "Remark",
  "number": "7.3.5",
  "title": "",
  "body": " We won't pursue this idea much further, but it is worth mentioning: We can define inner products on and on by . These are not exactly inner products because and are not vector spaces. So we can consider the vector spaces with and as bases; or, even better, the group algebras of and . Without getting into the definitions of those, we'll just remark that the previous theorem means that the elements of form an orthonormal basis for their group algebra, and likewise, the elements of form an orthonormal basis for their group algebra.  "
},
{
  "id": "sec-dirichlet-characters",
  "level": "1",
  "url": "sec-dirichlet-characters.html",
  "type": "Section",
  "number": "7.4",
  "title": "Dirichlet characters",
  "body": " Dirichlet characters  From this point on, we will not deal with characters on arbitrary finite abelian groups any more, only the groups . In order to lighten the notation (especially occurring as a subscript of a summation!), we will just write . Thus, for example, for any , . We can say is a character modulo (or mod ) if is a character on .  Given a character modulo , we define a function by . This is called a Dirichlet character.   There are exactly Dirichlet characters modulo . A Dirichlet character modulo has these properties:   is periodic with period , that is, for all .   if and only if .   is completely multiplicative, that is, for all (including if ).  Conversely, any function satisfying the above properties must be a Dirichlet character modulo .  Exercise.   Dirichlet characters inherit some of the properties of group characters, including the following versions of the orthogonality relations.   Let be a positive integer and let be Dirichlet characters modulo . Then where runs over a complete residue system modulo .  Exercise.    Recall that a complete residue system modulo is a set of integers with exactly one element in each residue class modulo . Examples of complete residue systems include , , or more generally any set of consecutive integers; but also non-consecutive sets, for example is a complete residue system modulo .    Let , and be positive integers such that . Then where runs over all Dirichlet characters modulo .  If or then for all . Otherwise, we reduce to group characters and the result follows from the orthogonality of group characters.   "
},
{
  "id": "sec-dirichlet-characters-3",
  "level": "2",
  "url": "sec-dirichlet-characters.html#sec-dirichlet-characters-3",
  "type": "Definition",
  "number": "7.4.1",
  "title": "",
  "body": "Given a character modulo , we define a function by . This is called a Dirichlet character. "
},
{
  "id": "sec-dirichlet-characters-4",
  "level": "2",
  "url": "sec-dirichlet-characters.html#sec-dirichlet-characters-4",
  "type": "Theorem",
  "number": "7.4.2",
  "title": "",
  "body": " There are exactly Dirichlet characters modulo . A Dirichlet character modulo has these properties:   is periodic with period , that is, for all .   if and only if .   is completely multiplicative, that is, for all (including if ).  Conversely, any function satisfying the above properties must be a Dirichlet character modulo .  Exercise.  "
},
{
  "id": "sec-dirichlet-characters-6",
  "level": "2",
  "url": "sec-dirichlet-characters.html#sec-dirichlet-characters-6",
  "type": "Theorem",
  "number": "7.4.3",
  "title": "",
  "body": " Let be a positive integer and let be Dirichlet characters modulo . Then where runs over a complete residue system modulo .  Exercise.  "
},
{
  "id": "sec-dirichlet-characters-7",
  "level": "2",
  "url": "sec-dirichlet-characters.html#sec-dirichlet-characters-7",
  "type": "Remark",
  "number": "7.4.4",
  "title": "",
  "body": " Recall that a complete residue system modulo is a set of integers with exactly one element in each residue class modulo . Examples of complete residue systems include , , or more generally any set of consecutive integers; but also non-consecutive sets, for example is a complete residue system modulo .  "
},
{
  "id": "sec-dirichlet-characters-8",
  "level": "2",
  "url": "sec-dirichlet-characters.html#sec-dirichlet-characters-8",
  "type": "Theorem",
  "number": "7.4.5",
  "title": "",
  "body": " Let , and be positive integers such that . Then where runs over all Dirichlet characters modulo .  If or then for all . Otherwise, we reduce to group characters and the result follows from the orthogonality of group characters.  "
},
{
  "id": "sec-dirichlet-l-functions",
  "level": "1",
  "url": "sec-dirichlet-l-functions.html",
  "type": "Section",
  "number": "7.5",
  "title": "Dirichlet L-functions",
  "body": " Dirichlet L-functions  Let be a positive integer and a Dirichlet character modulo . We define , called the Dirichlet -function associated to . Here is a complex variable; is a function defined on the subset of where this series converges, with values in .  When we think of as a complex number, we can write , where is the real part of and is the imaginary part. However for the proof of Dirichlet's theorem we will only deal with real values of , so we will mostly just use the letter . (In fact we will mostly just deal with .)  The series converges absolutely if has real part strictly greater than , i.e., if . To see this, recall that every value is either a root of unity, or else zero. Then, . We know that this series converges if , and diverges if , by the theory of -series.  However we will also be interested in Dirichlet -functions when . Now the series fails to converge absolutely, but it might still converge conditionally.  Having said that, if the character is the principal character, then it's easy to see that diverges to if . It is not exactly a -series because when . However, for each arithmetic sequence corresponding to a residue class modulo , we can show that the sum diverges, via a comparison with a -series. For example, , where the last sum is a normal -series, so it diverges if .  So, the Dirichlet -series for the principal character diverges if , and for nonprincipal characters, it does not converge absolutely if . The only thing left to settle is whether the series for a nonprincipal character converges conditionally. And it turns out that it does.   Let be a nonprincipal Dirichlet character and let be a positive function that has a continuous negative derivative. Then . In addition, if as , then the series converges and we have .   We will use Riemann-Stieltjes integration and integration by parts, as we have done before (but it would be equivalent to use Abel summation).  Let . Since is a nonprincipal character, we get that and in general for every positive integer . Therefore, and then by Riemann-Stieltjes integration and integration by parts (or by Abel summation), This is the first claim.  (A remark: Above, we wrote even though is a complex-valued function. However, our previous discussion of Riemann-Stieltjes integration was only for real-valued functions. To deal with a complex-valued function, we could handle the real and imaginary parts of separately, and just recombine them at the end.)  Next, assume that as . Since , or , then these partial sums for or go to zero as . Therefore the infinite series converges by the Cauchy criterion.  Finally, the partial sum for is equal to to the sum of the whole series minus the sum of the tail . And the sum of that tail is equal to the limit of the sum for as . By the first claim, the tail is regardless of the value of .     Let be a nonprincipal Dirichlet character modulo . Then for all we have   The previous theorem with functions , , and respectively.   A crucial step in the proof of Dirichlet's theorem is to prove that . Very simply, the idea is to define a certain function , and to show that   as ( is unbounded), but   is equal to times some unbounded function, plus .  The point is that if then , a contradiction. Specifically, this argument works for real-valued nonprincipal characters; we will give a separate argument for non-real nonprincipal characters. We postpone the details.  Very, very simply put, the reason we care that is nonzero is that we will show that times a certain sum is bounded, and then, as long as , we can deduce that the sum itself is bounded.  "
},
{
  "id": "sec-dirichlet-l-functions-2",
  "level": "2",
  "url": "sec-dirichlet-l-functions.html#sec-dirichlet-l-functions-2",
  "type": "Definition",
  "number": "7.5.1",
  "title": "",
  "body": "Let be a positive integer and a Dirichlet character modulo . We define , called the Dirichlet -function associated to . Here is a complex variable; is a function defined on the subset of where this series converges, with values in . "
},
{
  "id": "sec-dirichlet-l-functions-8",
  "level": "2",
  "url": "sec-dirichlet-l-functions.html#sec-dirichlet-l-functions-8",
  "type": "Theorem",
  "number": "7.5.2",
  "title": "",
  "body": " Let be a nonprincipal Dirichlet character and let be a positive function that has a continuous negative derivative. Then . In addition, if as , then the series converges and we have .   We will use Riemann-Stieltjes integration and integration by parts, as we have done before (but it would be equivalent to use Abel summation).  Let . Since is a nonprincipal character, we get that and in general for every positive integer . Therefore, and then by Riemann-Stieltjes integration and integration by parts (or by Abel summation), This is the first claim.  (A remark: Above, we wrote even though is a complex-valued function. However, our previous discussion of Riemann-Stieltjes integration was only for real-valued functions. To deal with a complex-valued function, we could handle the real and imaginary parts of separately, and just recombine them at the end.)  Next, assume that as . Since , or , then these partial sums for or go to zero as . Therefore the infinite series converges by the Cauchy criterion.  Finally, the partial sum for is equal to to the sum of the whole series minus the sum of the tail . And the sum of that tail is equal to the limit of the sum for as . By the first claim, the tail is regardless of the value of .   "
},
{
  "id": "dirichlet-l-function-convergence-examples",
  "level": "2",
  "url": "sec-dirichlet-l-functions.html#dirichlet-l-function-convergence-examples",
  "type": "Corollary",
  "number": "7.5.3",
  "title": "",
  "body": " Let be a nonprincipal Dirichlet character modulo . Then for all we have   The previous theorem with functions , , and respectively.  "
},
{
  "id": "sec-proof-1",
  "level": "1",
  "url": "sec-proof-1.html",
  "type": "Section",
  "number": "7.6",
  "title": "Proof of Dirichlet’s theorem, part 1",
  "body": " Proof of Dirichlet's theorem, part 1   In this section we'll start to prove Dirichlet's theorem. We'll give essentially the whole proof except for the hardest part of the proof, showing that for every character . Showing that will be the second part of the proof, in the next section of notes.  As in the statement of Dirichlet's theorem, we fix positive integers such that .    Going from summing over primes to summing over an arithmetic progression  This step is similar to part of the proof of Mertens's theorem.   Step 1   .   We have The last sum converges: we have which converges by comparison with a p-series.      Summing over all positive integers by using the orthogonality relations of Dirichlet characters  Our next step is to take the sum of from a sum over into a sum over all positive . We will use the orthogonality relations of Dirichlet characters so that the terms remain in the sum, while all other values of cancel out, up to some bounded quantity.   Step 2  We have . In addition, for the principal character, . Hence .   Recall that for any integers , if , we have the orthogonality relation Using this, This shows the first claim.  For the principal character, the summation of agrees with the summation of except for terms where . Mertens's theorem includes the result that . Now consider the terms with . There is an additional restriction: only when is a power of a prime. So the difference between the sum we are considering, and the sum that appeared in Mertens's theorem, is just for terms where is a power of a prime, for a prime that divides the modulus .  There are only finitely many such primes. Each such prime contributes a difference of . We have seen already the convergence of the full series . So the sum for is a bounded amount. Adding up these bounded amounts for the finitely many primes that divide gives a bounded amount, in other words an . This proves the second claim.  The third claim follows from the first one, separating out the terms for the principal and nonprincipal characters, and substituting the estimate for the principal character.    Combining this with step 1, we get . Our goal is to show that it is equal to . So, what is left is to show that the middle term is bounded ( ). In fact we will show that for each , the sum is bounded. Since there are finitely many characters ( is a finite group), then adding them all together gives a bounded quantity.   This step is the first, last, and only place where the integer (as in, the primes such that ) plays a role in the proof. Specifically, the integer is used to provide the coefficients used to combine the sums .     Each nonprincipal character contributes a bounded amount   Step 3  Let be a nonprincipal character modulo . We have    Proof: Nonzero case  Assume that . Consider the sum . By this sum converges as , so it is bounded, i.e., .  On the other hand, we have . The first equality follows from the identity which we have seen before. The second equality is by substitution .  Since every Dirichlet character is completely multiplicative, we have (for all , including if ). So the summand in the last sum can be rewritten as .  First we will fix and evaluate the sum over . We know that for , by . Therefore We want to simplify that last sum. First, observe that we can bound the sum: . Here we are using that because each is a root of unity, or zero. Every value of is either or zero; and (we have , but still ). Recall that , Chebyshev's function, by definition. And recall that by Chebyshev's estimates, .  So, . Can we conclude that ? Not immediately. The problem is that the implicit constant appearing in the factor might a priori depend on ; and it might grow as grows.  Well, the factors are not arbitrary, independent things. They come from the same place: the tails of the sum . Specifically, we have for some constant that doesn't depend on . In particular that means where the constant doesn't depend on or on . So, the sum we're trying to bound can now be bounded: and again, the sum of is equal to which is .  In conclusion, and so therefore Finally, since , we can divide to get that the sum is as claimed.   It could have all gone wrong if it had been with . This highlights the importance of knowing when the implicit constant in big O notation is dependent or independent of other variables.     Proof: Zero case  Assume that . We will show that is bounded.  Recall the identities . (As a reminder: We have mentioned the identity . Then Möbius inversion gives , which is the first equality. The second equality is algebraic simplification.)  Using these identities, because if then and , while if then .  Now we consider , with the goal of showing it is bounded. Both of the expressions and can be replaced with . In addition, when we have . After we make this substitution, we will interchange the order of summation: Therefore .     "
},
{
  "id": "sec-proof-1-3-3",
  "level": "2",
  "url": "sec-proof-1.html#sec-proof-1-3-3",
  "type": "Proposition",
  "number": "7.6.1",
  "title": "Step 1.",
  "body": " Step 1   .   We have The last sum converges: we have which converges by comparison with a p-series.   "
},
{
  "id": "sec-proof-1-4-3",
  "level": "2",
  "url": "sec-proof-1.html#sec-proof-1-4-3",
  "type": "Proposition",
  "number": "7.6.2",
  "title": "Step 2.",
  "body": " Step 2  We have . In addition, for the principal character, . Hence .   Recall that for any integers , if , we have the orthogonality relation Using this, This shows the first claim.  For the principal character, the summation of agrees with the summation of except for terms where . Mertens's theorem includes the result that . Now consider the terms with . There is an additional restriction: only when is a power of a prime. So the difference between the sum we are considering, and the sum that appeared in Mertens's theorem, is just for terms where is a power of a prime, for a prime that divides the modulus .  There are only finitely many such primes. Each such prime contributes a difference of . We have seen already the convergence of the full series . So the sum for is a bounded amount. Adding up these bounded amounts for the finitely many primes that divide gives a bounded amount, in other words an . This proves the second claim.  The third claim follows from the first one, separating out the terms for the principal and nonprincipal characters, and substituting the estimate for the principal character.   "
},
{
  "id": "sec-proof-1-4-5",
  "level": "2",
  "url": "sec-proof-1.html#sec-proof-1-4-5",
  "type": "Remark",
  "number": "7.6.3",
  "title": "",
  "body": " This step is the first, last, and only place where the integer (as in, the primes such that ) plays a role in the proof. Specifically, the integer is used to provide the coefficients used to combine the sums .  "
},
{
  "id": "sec-proof-1-5-2",
  "level": "2",
  "url": "sec-proof-1.html#sec-proof-1-5-2",
  "type": "Proposition",
  "number": "7.6.4",
  "title": "Step 3.",
  "body": " Step 3  Let be a nonprincipal character modulo . We have    Proof: Nonzero case  Assume that . Consider the sum . By this sum converges as , so it is bounded, i.e., .  On the other hand, we have . The first equality follows from the identity which we have seen before. The second equality is by substitution .  Since every Dirichlet character is completely multiplicative, we have (for all , including if ). So the summand in the last sum can be rewritten as .  First we will fix and evaluate the sum over . We know that for , by . Therefore We want to simplify that last sum. First, observe that we can bound the sum: . Here we are using that because each is a root of unity, or zero. Every value of is either or zero; and (we have , but still ). Recall that , Chebyshev's function, by definition. And recall that by Chebyshev's estimates, .  So, . Can we conclude that ? Not immediately. The problem is that the implicit constant appearing in the factor might a priori depend on ; and it might grow as grows.  Well, the factors are not arbitrary, independent things. They come from the same place: the tails of the sum . Specifically, we have for some constant that doesn't depend on . In particular that means where the constant doesn't depend on or on . So, the sum we're trying to bound can now be bounded: and again, the sum of is equal to which is .  In conclusion, and so therefore Finally, since , we can divide to get that the sum is as claimed.   It could have all gone wrong if it had been with . This highlights the importance of knowing when the implicit constant in big O notation is dependent or independent of other variables.     Proof: Zero case  Assume that . We will show that is bounded.  Recall the identities . (As a reminder: We have mentioned the identity . Then Möbius inversion gives , which is the first equality. The second equality is algebraic simplification.)  Using these identities, because if then and , while if then .  Now we consider , with the goal of showing it is bounded. Both of the expressions and can be replaced with . In addition, when we have . After we make this substitution, we will interchange the order of summation: Therefore .   "
},
{
  "id": "sec-proof-2",
  "level": "1",
  "url": "sec-proof-2.html",
  "type": "Section",
  "number": "7.7",
  "title": "Proof of Dirichlet’s theorem, part 2",
  "body": " Proof of Dirichlet's theorem, part 2   In this section we'll finish the proof of Dirichlet's theorem. What is left is to show that for every character . We already know it for the principal character (in fact ), so we just have to show it for nonprincipal characters. This will happen in two steps: First we'll show it for real nonprincipal characters. The Dirichlet hyperbola method makes an appearance here. Second, we'll show it for nonreal nonprincipal characters, by a clever trick which hinges on complex conjugation.  We fix a positive integer . For this part of the proof, the integer (as in, the primes such that ) doesn't play a role.    Real nonprincipal characters   A character is called real if its values are in the real numbers.   Since the values of are roots of unity (or zero), the only real values are . For example (we won't use these examples in the proof):  The principal character is real.  If is prime, the Legendre symbol is a real character.  As an exercise, one can show that modulo a prime , the principal character and the Legendre symbol are the only real characters.     Let be a real nonprincipal Dirichlet character modulo . Then .   We know that is completely multiplicative.   Step 1   Let . Then for all and if is a square.    Since is (completely) multiplicative and (Dirichlet convolution), it follows that is multiplicative (but not necessarily completely multiplicative).  Let be a prime and . Then   Let . Then . We saw that every , hence . If is a perfect square, then every power is even, so each . It follows that .     Step 2   Let . Then as .    We have This is a partial sum of the harmonic series; as it diverges.     Step 3    .    We will use the Dirichlet hyperbola method.  We have This sum is over lattice points where are postive integers such that , i.e., lying on or underneath the hyperbola in the -plane. We separate the region under the hyperbola into three parts as follows: the first part is defined by , the second is defined by , and the third is the intersection of the first two, so (both). Visually, if is the horizontal coordinate and is the vertical coordinate, then the region under the hyperbola with is the upward branch, the region under the hyperbola with is the rightward branch, and the region with both is a square. Define as the sums over lattice points in these regions: We have   Now our goal is to approximate the . Looking ahead, we can expect to encounter certain sums, so it will be helpful to recall the following approximations: and , both of these holding for all . (The textbook mentions a more accurate approximation for the sum of that can be found by using Euler summation.) We will use them for . In order to avoid headaches about fractions, here are explicit statements: and . We will apply these with various 's and 's; warning, sometimes we will use, for example, in which case (similar for ).  Now, here are the approximations of the . The easiest is : Next, we approximate : (For some reason, the textbook uses more accurate approximations here and does extra work, to arrive at the same result in the end.) Finally, is similar to : Putting it all together: which proves the claim.     Conclusion  .   If then , contradicting that as .        Nonreal nonprincipal characters   Let be any nonprincipal Dirichlet character modulo . Then .   Let be the number of Dirichlet characters modulo with . Our goal is to show that .  Recall that:  For the principal character , .  For , if , then .  For , if , then .  Adding this up for all characters modulo , we get We get from the principal character, and from the nonprincipal characters with .  We can use the orthogonality relations to simplify the left hand side of the equation: We used that is equal to if , or otherwise. And we used that each term .  The result is that Well, if this is impossible, the left hand side will go to . Therefore .  Finally we rule out the possibility that . If it means that there is a nonprincipal character with . We know that must be nonreal, i.e., for some .  But then is also a character, distinct from ( ), and we have which would force .  This contradiction shows that is impossible. So it must be . There are no Dirichlet characters with .      Conclusion: Proof of Dirichlet's theorem   Dirichlet's theorem   Let be positive integers with . Then . In particular, there are infinitely many primes congruent to modulo .    We have as claimed.     "
},
{
  "id": "sec-proof-2-3-2",
  "level": "2",
  "url": "sec-proof-2.html#sec-proof-2-3-2",
  "type": "Definition",
  "number": "7.7.1",
  "title": "",
  "body": " A character is called real if its values are in the real numbers.  "
},
{
  "id": "sec-proof-2-3-4",
  "level": "2",
  "url": "sec-proof-2.html#sec-proof-2-3-4",
  "type": "Theorem",
  "number": "7.7.2",
  "title": "",
  "body": " Let be a real nonprincipal Dirichlet character modulo . Then .   We know that is completely multiplicative.   Step 1   Let . Then for all and if is a square.    Since is (completely) multiplicative and (Dirichlet convolution), it follows that is multiplicative (but not necessarily completely multiplicative).  Let be a prime and . Then   Let . Then . We saw that every , hence . If is a perfect square, then every power is even, so each . It follows that .     Step 2   Let . Then as .    We have This is a partial sum of the harmonic series; as it diverges.     Step 3    .    We will use the Dirichlet hyperbola method.  We have This sum is over lattice points where are postive integers such that , i.e., lying on or underneath the hyperbola in the -plane. We separate the region under the hyperbola into three parts as follows: the first part is defined by , the second is defined by , and the third is the intersection of the first two, so (both). Visually, if is the horizontal coordinate and is the vertical coordinate, then the region under the hyperbola with is the upward branch, the region under the hyperbola with is the rightward branch, and the region with both is a square. Define as the sums over lattice points in these regions: We have   Now our goal is to approximate the . Looking ahead, we can expect to encounter certain sums, so it will be helpful to recall the following approximations: and , both of these holding for all . (The textbook mentions a more accurate approximation for the sum of that can be found by using Euler summation.) We will use them for . In order to avoid headaches about fractions, here are explicit statements: and . We will apply these with various 's and 's; warning, sometimes we will use, for example, in which case (similar for ).  Now, here are the approximations of the . The easiest is : Next, we approximate : (For some reason, the textbook uses more accurate approximations here and does extra work, to arrive at the same result in the end.) Finally, is similar to : Putting it all together: which proves the claim.     Conclusion  .   If then , contradicting that as .     "
},
{
  "id": "sec-proof-2-4-2",
  "level": "2",
  "url": "sec-proof-2.html#sec-proof-2-4-2",
  "type": "Theorem",
  "number": "7.7.7",
  "title": "",
  "body": " Let be any nonprincipal Dirichlet character modulo . Then .   Let be the number of Dirichlet characters modulo with . Our goal is to show that .  Recall that:  For the principal character , .  For , if , then .  For , if , then .  Adding this up for all characters modulo , we get We get from the principal character, and from the nonprincipal characters with .  We can use the orthogonality relations to simplify the left hand side of the equation: We used that is equal to if , or otherwise. And we used that each term .  The result is that Well, if this is impossible, the left hand side will go to . Therefore .  Finally we rule out the possibility that . If it means that there is a nonprincipal character with . We know that must be nonreal, i.e., for some .  But then is also a character, distinct from ( ), and we have which would force .  This contradiction shows that is impossible. So it must be . There are no Dirichlet characters with .   "
},
{
  "id": "sec-proof-2-5-2",
  "level": "2",
  "url": "sec-proof-2.html#sec-proof-2-5-2",
  "type": "Theorem",
  "number": "7.7.8",
  "title": "Dirichlet’s theorem.",
  "body": " Dirichlet's theorem   Let be positive integers with . Then . In particular, there are infinitely many primes congruent to modulo .    We have as claimed.   "
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
