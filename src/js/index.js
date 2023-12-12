document.addEventListener('DOMContentLoaded', function() {
    const orderBtns = document.querySelectorAll('.orderBtn');
  
    orderBtns.forEach(orderBtn => {
      orderBtn.addEventListener('click', function() {
        const parent = this.parentElement;
        const orderForm = parent.querySelector('.orderForm');
        const placeOrderBtn = orderForm.querySelector('.placeOrderBtn');
        const form = orderForm.querySelector('.userDetails');
        const cancelBtn = orderForm.querySelector('.cancelBtn');
  
        orderForm.style.display = 'block';
  
        placeOrderBtn.addEventListener('click', function(event) {
          event.preventDefault();
  
          const formFields = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="number"]');
          let allFieldsFilled = true;
  
          formFields.forEach(field => {
            if (!field.value.trim()) {
              allFieldsFilled = false;
            }
          });
  
          if (allFieldsFilled) {
            alert(`Your order is placed! our delivery person is contact you in just 30 minitus...
            and we sent you a email and meesage regarding your bill  and payment option...`);
            form.reset();
            orderForm.style.display = 'none';
          } else {
            alert('Please fill all fields.');
          }
        });
  
        cancelBtn.addEventListener('click', function() {
          form.reset();
          orderForm.style.display = 'none';
        });
      });
    });
  });
  
 