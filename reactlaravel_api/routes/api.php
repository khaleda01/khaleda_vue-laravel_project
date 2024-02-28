<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProductListController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::get('/productList/{remark}', [ProductListController::class, 'ProductListByRemark']);

Route::post('/add-product', [ProductListController::class, 'storeProduct']);
Route::get('/all-product', [ProductListController::class, 'index']);
// Route::get('/deleteproduct/{id}', [ProductListController::class, 'destroy']);