# Final Project on Leading Causes of Death Analysis with Machine Learning

## Background:
Scientists are constantly trying to find out what factors lead to death whether it be behavioral, environmental, or financial. This is inspired by the current trends on health awareness, the improvement of healthy habits, and the increase in life expectancy. We wanted to analyze factors that may show correlation to death rates across the US according to data from the CDC, America’s Health Rankings Organization, and the Bureau of Economic Analysis on a 5-year time scale from 2011-2016.

## Goal:
Analyze the relationship between tobacco use, obesity rates, and per capita income on the number of deaths on a state and national level

## Hypothesis:
Obesity, tobacco, and income are all positively correlated factors to number of deaths

## Variables for Exploration:
Tobacco Use %, Obesity %, Per Capita Income, Number of Deaths

## Tools Used:
Pandas, Matplotlib, Tableau, Scikit-Learn, HTML, CSS, Bootstrap

## Machine Learning Trends: 
The R2 of .56 indicates that the model explains about 56% of the variability of the data around the mean. The differences between states are significant and can cause outliers and contribute to the skewed results of the analysis. The mean scored error, which shows the averaged squared difference between the predicted and actual values was .39, close to the desired 0 range. Overall, the probabilities of a positive correlation between number of deaths and tobacco use, obesity rates, and per capita income combined are relatively low. These factors alone are not enough to cause a strong correlation. Increasing the amount of data with more variables would have improved the results of the predicted model.  

## Tableau Trends: 

Consolidated Data: A map of the United States where each state is represented by a pie mark, each segment represents one year of historical data 2011-2016 and all information (total deaths, percentage of obesity, percentage of tobacco use, and per capita income) of that year is loaded into the tooltip.

Us Regions: A map of the United States divided by region, in each one of them all the information related to the historical data is displayed 2011- 2016 (total of deaths, tobacco consumption percentage, obesity rate percentage and average per capita income).

Variables correlation: These 3 graphics shows the correlations between the variables: Tobacco Consumption, Obesity Percentage, Per Capita Consumption and amount of Deaths by year in the United States 2011- 2016.The obesity percentage and the number of deaths grows in the same direction, this means that variable has a positive correlation with the number of deaths of each year; in another hand, the correlation between the tobacco consumption and the number of deaths is negative because the amounts of deaths increase while the percentage of tobacco consumption decrease, the same behavior is occurring with the per capita income. Of all three variables, the only one that shows a positive correlation the obesity percentage.

Top 10 States with higher amount of deaths: Top 10 states with a higher amount of deaths in the United States and top 10 of each variable: Tobacco Consumption, Obesity Percentage and 10 bottom states with Per Capita Income  2011- 2016.


# Sources:
## Leading Causes of Death:
### https://www.cdc.gov/nchs/data-visualization/mortality-leading-causes/index_2.htm


## Factors
### Tobacco Use: https://www.americashealthrankings.org/explore/annual/measure/Smoking/
### Alcohol: https://pubs.niaaa.nih.gov/publications/surveillance110/tab4-1_16.htm
### Obesity: https://chronicdata.cdc.gov/Nutrition-Physical-Activity-and-Obesity/Nutrition-Physical-Activity-and-Obesity-Behavioral/hn4x-zwk7/data
### Personal Income by state: https://apps.bea.gov/itable/iTable.cfm?ReqID=70&step=1


## Notes:
### Mortality and causal links to behavioral factors: https://www.cdc.gov/mmwr/preview/mmwrhtml/su6304a2.htm#tab3



## (See Website for Dashboard/Visualizations & PowerPoint for more information)
