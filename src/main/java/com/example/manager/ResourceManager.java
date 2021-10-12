package com.example.manager;

public class ResourceManager {
    private int count = 0;

    private static ResourceManager instance = new ResourceManager();

    private ResourceManager(){}

    public static ResourceManager getInstance(){
        return instance;
    }

    public synchronized void addCount(int i){
        count = count + i;
        System.out.println("addCount success");
    }

    public int getCount(){
        return count;
    }

    public void initCount(int i){
        count = i;
        System.out.println("inti success");
    }
}