let selectedAmount = 0;
        let currentFrequency = 'monthly';

        function setFrequency(frequency) {
            currentFrequency = frequency;
            document.querySelectorAll('.frequency-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            updateDonateButton();
        }

        function selectAmount(amount) {
            selectedAmount = amount;
            document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            document.getElementById('customAmount').value = '';
            updateImpactMessage(amount);
            updateDonateButton();
        }

        document.getElementById('customAmount').addEventListener('input', function() {
            selectedAmount = parseInt(this.value) || 0;
            document.querySelectorAll('.amount-btn').forEach(btn => btn.classList.remove('active'));
            updateImpactMessage(selectedAmount);
            updateDonateButton();
        });

        function updateImpactMessage(amount) {
            const impactText = document.getElementById('impactText');
            if (amount >= 10000) {
                impactText.innerHTML = `Your ₹${amount.toLocaleString()} donation can help build shelter for families in need!`;
            } else if (amount >= 5000) {
                impactText.innerHTML = `Your ₹${amount.toLocaleString()} donation can provide education support for multiple children!`;
            } else if (amount >= 2500) {
                impactText.innerHTML = `Your ₹${amount.toLocaleString()} donation can sponsor educational materials for 5 students!`;
            } else if (amount >= 1000) {
                impactText.innerHTML = `Your ₹${amount.toLocaleString()} donation can provide meals for 20 children!`;
            } else if (amount >= 500) {
                impactText.innerHTML = `Your ₹${amount.toLocaleString()} donation can feed 10 children for a week!`;
            } else if (amount > 0) {
                impactText.innerHTML = `Every rupee counts! Your ₹${amount} donation makes a difference.`;
            } else {
                impactText.innerHTML = 'Select an amount to see your impact';
            }
        }

        function updateDonateButton() {
            const buttonText = document.getElementById('donateButtonText');
            if (selectedAmount > 0) {
                const frequencyText = currentFrequency === 'monthly' ? '/month' : '';
                buttonText.innerHTML = `Donate ₹${selectedAmount.toLocaleString()}${frequencyText}`;
            } else {
                buttonText.innerHTML = 'Donate Now';
            }
        }

        document.getElementById('dedicateGift').addEventListener('change', function() {
            const dedicationFields = document.getElementById('dedicationFields');
            dedicationFields.style.display = this.checked ? 'block' : 'none';
        });

        document.getElementById('donationForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (selectedAmount === 0) {
                alert('Please select a donation amount');
                return;
            }

            // Show success message
            alert(`Thank you for your generous donation of ₹${selectedAmount.toLocaleString()}! This is a demo form. In a real implementation, this would process the payment securely.`);
        });

        // Initialize with default amount
        selectAmount(1000);