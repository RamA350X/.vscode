import random
choices=['rock','paper','scissors']

print("Rock paper scissors game!")

player=str(input("choose rock/paper/scissors: "))
computer=random.choice(choices)

print("Computer choose: ",computer)

if player==computer:
    print("it's tie!")
elif(player =='rock' and computer == 'scissors')\
    or(player == 'paper'and computer == 'rock')\
    or(player == 'scissors' and computer == 'paper'):
    print("You Win!!")
else:
    print("computer wins!!")