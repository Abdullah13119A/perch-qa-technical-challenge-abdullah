# QA Bug Report Log

---

## Issue #01: (High)  
**Incorrect Price Display in Order History When Product Quantity Is Increased**

**Steps to Reproduce:**
1. Add a product to the cart.  
2. Increase the quantity (e.g., from 2 or more).  
3. Complete the order.  
4. Navigate to the Order History page.  

**Expected Result:**  
The total price in Order History should reflect the quantity multiplied by the unit price.

**Actual Result:**  
Order History shows only the price of one item, regardless of the quantity ordered.

**Video:**  
[Watch here](https://www.loom.com/share/6f25edb639ea49fa9421b6b629409eca)

---

## Issue #02: (High)  
**"View Your Orders" Button Redirects to Personal Profile Instead of Order History**

**Steps to Reproduce:**
1. Add a product to the cart.  
2. Click on "View Your Orders"  
3. Observe the page redirection  

**Expected Result:**  
Clicking "View Your Orders" should open the Order History page showing the user's past orders.

**Actual Result:**  
It opens the Personal Profile page instead.

**Video:**  
[Watch here](https://www.loom.com/share/0d8c75b79d5c462bb3e2959d51ef2f9a)

---

## Issue #03: (Medium)  
**Profile Button Opens Both Profile and Order History Sections**

**Steps to Reproduce:**
1. Navigate to the Product Page  
2. Click on the User Profile icon  
3. Observe the sections that appear  

**Expected Result:**  
Only the Personal Profile section should be displayed.

**Actual Result:**  
Both Profile and Order History sections are displayed together.

**Video:**  
[Watch here](https://www.loom.com/share/e7d178b7e3ba43e3b2d5e8fce0c72b2a)

---

## Issue #04: (Low)  
**Two “Continue Shopping” Buttons Appear When Cart is Empty**

**Steps to Reproduce:**
1. Navigate to the Product Page  
2. Without selecting or adding any product, click on the Cart button  
3. Observe the cart screen  

**Expected Result:**  
Only one "Continue Shopping" button should appear.

**Actual Result:**  
Two "Continue Shopping" buttons are visible.

---

## Issue #05: (High)  
**"Sort by Price" Functionality Not Working on Product Page**

**Steps to Reproduce:**
1. Navigate to the Product Page  
2. Try to sort products using the "Sort by Price" option  
3. Observe if the products reorder  

**Expected Result:**  
Products should reorder by price correctly.

**Actual Result:**  
Sorting does not affect product order.

**Video:**  
[Watch here](https://www.loom.com/share/0bd176c4c5aa4533a9fe3843a94673fe)

---

## Issue #06: (Medium)  
**Add to Cart Button Size is Not Proper**

**Steps to Reproduce:**
1. Navigate to the Product Page  
2. Click on View Detail  
3. Observe the "Add to Cart" button  

**Expected Result:**  
The button should be consistently sized.

**Actual Result:**  
Button appears too large, affecting visual consistency.

---

## Issue #07: (Medium)  
**Quantity Dropdown Limited to 5 Options and Missing Border at 100 Resolution**

**Steps to Reproduce:**
1. Navigate to a product detail page  
2. Click the quantity dropdown  

**Expected Result:**  
Should display all quantity options (e.g., 10 or 20).

**Actual Result:**  
Dropdown only shows 5 options.

**Video:**  
[Watch here](https://www.loom.com/share/45f37d1c77584c0f8c8497b38b69053a)

---

## Issue #08: (Medium)  
**Improper Spacing Between "Save Changes" and "Cancel" Buttons on Profile Page**

**Steps to Reproduce:**
1. Navigate to the profile page  
2. Observe the spacing between "Save Changes" and "Cancel"  

**Expected Result:**  
Proper spacing for a clean layout.

**Actual Result:**  
Buttons appear too close.

---

## Issue #09: (Medium)  
**Checkout Page Clears User Data When Navigating Back from Payment Details**

**Steps to Reproduce:**
1. Fill in checkout details  
2. Go to the payment step  
3. Click back  

**Expected Result:**  
User data should be retained.

**Actual Result:**  
Form resets; data is lost.

**Video:**  
[Watch here](https://www.loom.com/share/f8e9f528f49b4e42b9a2bcdb5ef94a0b)

---

## Issue #10: (High)  
**Users Can Checkout With Expired Cards**

**Steps to Reproduce:**
1. Enter expired card details  
2. Submit payment  

**Expected Result:**  
Error should be shown for expired cards.

**Actual Result:**  
Checkout is successful.

**Video:**  
[Watch here](https://www.loom.com/share/4833486bbf994175a003c6e8ab006f9e)

---

## Issue #11: (Low)  
**No Proper Spacing Between Fields and Labels on Profile Page**

**Steps to Reproduce:**
1. Navigate to Profile page  
2. Observe spacing between field labels and inputs  

**Expected Result:**  
Even, readable spacing.

**Actual Result:**  
Spacing is uneven.

---

## Issue #12: (High)  
**Total Quantity Shows 0 When Adding More Than 5 Units in Multiple Attempts**

**Steps to Reproduce:**
1. Add 3 units of a product  
2. Add 3 more units  
3. Check cart  

**Expected Result:**  
Correct total quantity should show.

**Actual Result:**  
Quantity resets to 0.

**Video:**  
[Watch here](https://www.loom.com/share/8d174eb77c9e4d68b51e1e0332269973)

---

## Issue #13: (Low)  
**Insufficient Spacing Between Product Catalog Heading and Profile/Cart Button**

**Steps to Reproduce:**
1. Go to main shop page  
2. Observe spacing at the top  

**Expected Result:**  
Clean space between elements.

**Actual Result:**  
Tight spacing creates clutter.

---

## Issue #14: (Low)  
**Product Image and Details Not Aligned**

**Steps to Reproduce:**
1. Open product page  
2. Observe alignment  

**Expected Result:**  
Proper visual alignment.

**Actual Result:**  
Content appears misaligned.

---

## Issue #15: (Low)  
**Cursor Jumps to End in Number Field**

**Steps to Reproduce:**
1. Click a number input field  
2. Edit anywhere except end  

**Expected Result:**  
Cursor should stay where clicked.

**Actual Result:**  
Cursor jumps to the end.

**Video:**  
[Watch here](https://www.loom.com/share/320d58c9b51d4ca5a4ad464602e0ab1c)

---

## Issue #16: (Low)  
**Inconsistent "Back to Product" Button Placement on Product Detail Page**

**Steps to Reproduce:**
1. Go to different product pages  
2. Check button location  

**Expected Result:**  
Consistent placement across pages.

**Actual Result:**  
Varies from page to page.

---

## Issue #17: (Enhancement)  
**No Confirmation Popup When Removing Product From Cart**

**Steps to Reproduce:**
1. Add a product to cart  
2. Remove it  

**Expected Result:**  
Popup should confirm removal.

**Actual Result:**  
Item is removed instantly.

**Video:**  
[Watch here](https://www.loom.com/share/07f739b7b76048cb84558c62cbaeedf3)

---
