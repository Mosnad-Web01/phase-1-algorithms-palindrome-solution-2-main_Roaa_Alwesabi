function isPalindrome(word) {
  // التكرار من بداية السلسلة حتى منتصفها
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
    // حساب موقع الحرف المقابل من النهاية
    const endIndex = word.length - 1 - startIndex;
    // إذا لم تتطابق الأحرف، نعيد false
    if (word[startIndex] !== word[endIndex]) {
      return false;
    }
  }
  // إذا كانت كل الأحرف متطابقة، نعيد true
  return true;
}

/* 
  السيناريو التخيلي (Pseudocode):
  - التكرار من بداية السلسلة وحتى منتصفها.
  - في كل خطوة، نقارن الحرف عند الموقع الحالي مع الحرف المقابل له في النهاية.
  - إذا لم تتطابق الأحرف، نعيد false.
  - إذا كانت كل الأحرف متطابقة، نعيد true.
*/

/*
  شرح الحل:
  تقوم الدالة بالتكرار من بداية السلسلة وحتى منتصفها، وفي كل مرة تقارن الحرف في الموقع الحالي بالحرف المقابل له من النهاية. إذا لم تتطابق الأحرف، تعيد الدالة false وتتوقف. إذا أكملت التكرار ووصلت إلى منتصف السلسلة وكانت كل الأحرف متطابقة، تعيد الدالة true.
*/

// لاختبار الدالة:
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
