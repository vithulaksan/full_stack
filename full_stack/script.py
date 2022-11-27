import pandas as pd
import psycopg2

host = "localhost"


conn = psycopg2.connect( host=host,
    database="postgres",
    user="postgres",
    password="postgres")

cur = conn.cursor()

df = pd.read_excel("calories2.xlsx")



for i in range(len(df)):
    cur.execute("insert into aliments_aliments values(" + str(df["id_aliment"][i]) + ',\''+df["Category"][i]+'\',\''+df["FoodItem"][i]+'\','+str(df["Quantite_en_ml_or_g"][i]) +','+str(df["calorie_en_cal_per_ml_or_g"][i])+','+str(df["kJ_per_ml_or_g"][i])+');') 
    conn.commit()
cur.close()