When I click on a number
  given that I have not pressed the decimal
  then that number should display on the the display

  given that I have pressed the decimal
  then that number should be concatenated on the end of the currently displayed number
  given that a number is already displayed then the digits should be concatenated.

When I click on an arithmetic operator
  then is should queue the indicated operation to operate on the number that is displayed and the number about to be clicked.
  And it displays any queued calculation.

When I click on clear...
  Then queued operations and calculations arecleared.
  and the display is reset to 0

when I clikc on equal...
  then queued operations are calculated, and the display is set to the calculation
