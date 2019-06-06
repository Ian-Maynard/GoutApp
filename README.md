# GoutApp
App to assist Gout sufferers

Because gout attacks are caused by an accumulation of Uric acid which is metabolized one's daily diet attacks can be   
avoided or mitigated by being aware of the uric acid metabolites in the ingredient in the food one consumes. 

This app will use an existing database to help gout sufferers avoid flare-up's by rating the food the user eats, by 
ingredient or by recipe. 

It will use the data from this source:

https://www.jstage.jst.go.jp/article/bpb/37/5/37_b13-00967/_pdf/-char/en 

as a basis for discerning how likely to be gout-flare inducing a particular ingredient or recipe will be.

The app will use the Spoontacular API to check a given recipe's ingredients against the source table's data to discern based on the ingredients and their level of uric acid metabolites how gout inducing a recipe is. 

App Modes:

      Mode 1 - Ingredient Check

      Enter Ingredient:
      
          Interogate database using API 
           If found:
             - Display actual metabolite information
             - Display ingredient type (Animal protein etc.)
             - Give color display rating 
             - return
             
           If not found:
             - Request Ingredient type. 
                      Search on Ingredient type 
                       If found: 
                                   - Relay findings 
                                   - Relay recommendation
                                   - return
                       If not found:
                                   - Search google for name 
                                   - enter name and description 
                                   - label as yellow (just in case)
                                   - store
                                   - return
                                   
      Mode 2 - Recipe Check

      Enter Recipe:
          Interogate recipe database using Spoonacular API
          
          If Found:
          - Identify the key ingredients (Protein, Sauce, garnish)
          - Retrieve and store major ingredients
          - Cycle all through api for gout 
          - average the total 
          - Give color display rating 
                 If Food Diary is engaged:
                   - add to total Purine input and comopare to user-inputted threshold.
                   
          - Return
              
           If not found:
             - Request Major Ingredient. 
             - Perform Ingredient search 
                 If found: 
                 - Relay findings 
                 - store recommendation
                 - return
                                
                 If not found:
                 - Notify
                 - Search google for name 
                 - Create Stub Record
                 - label as yellow (just in case)
                 - store
                 - return
                                
 Features: The Color Display warning
     
      The app will give a color-based rating:
 
      Green   - Zero to low uric acid metabolizing ingredients 
      Yellow  - Low to Medium uric acid content 
      Red     - Medium to High uric acid metabolizing ingredients
                     
                                
Features: The Food Diary 
  
      Because gout attacks are caused by an accumulation of Uric acid which is metabolized one's daily diet,  attacks can be   
      avoided or mitigated by carefully noting diet. The app will assist by helping a user to see what they've eaten that day
      and in the recent past.

Features: Purine API. 

      The API will be used in the app and be offered as a stand-alone product in it's own right. 
      

Features: Community/Messaging 

      Community and Messaging. The App will encompass messaging capabilities and use Google to Authenticate and Onboard users. 
      We will use Firebase for this aspect of the App.
