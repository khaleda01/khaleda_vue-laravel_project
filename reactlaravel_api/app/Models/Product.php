<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // use HasFactory;
    // protected $guarded = [];





    use HasFactory;
    protected $table ='product_lists';
    protected $fillable =[
        'category_id',
        'product_name',
        'slug',
        'brand',
        'selling_price',
        'buying_price',
        'quantity',
        'status',
        'image', 
    ];
    // protected $with = ['category'];
    // public function category(){
    //     return $this->belongsTo(Category::class,'category_id','id');
    // }
    
}
