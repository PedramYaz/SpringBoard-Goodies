"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start=0):
        'Start your serial generator at a specified number'
        self.start = self.next = start

    def __repr__(self):
        'show representation'
        return f"<SerialGenerator start = {self.start} and next is {self.next}>"

    def generate(self):
        'creates the serial number, and when ran again, generates the next one'
        self.next += 1
        return self.next - 1

    def reset(self):
        'resets the serial number back to your start point'
        self.next = self.start



    

